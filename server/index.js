const TextSearch = require("googleplaces/lib/TextSearch.js")
const config = require("./config/config.js")
const textSearch = new TextSearch(config.apiKey, config.outputFormat)
var fs = require("fs")
const restaurants = require("./restaurants.json")

var express = require("express")
var app = express()
var port = 3011
app.get("/places", function(req, res) {
  textSearch(
    {
      query: req.query.search || "Jena restaurant"
    },
    function(error, response) {
      if (error) res.send("error")
      res.send(response)
    }
  )
})

app.get("/placesCached", function(req, res) {
  res.send(restaurants)
})

app.get("/updatePlaces", function(req, res) {
  var results = []
  var count = 0
  const search = query =>
    textSearch(query, function(error, response) {
      const token = response.next_page_token

      if (response.results) {
        results = [...results, ...response.results]
      }

      if (token && count < 20) {
        console.log("Start NEW search number: ", count)
        count = count++

        setTimeout(
          () =>
            search({
              query: "Jena restaurant",
              pagetoken: token
            }),
          10000
        )
      } else {
        write(results)
        console.log("Restaurants updated")
      }
    })

  search({
    query: "Jena restaurant"
  })
})

const write = results => {
  let outputFile = "./restaurants.json"
  fs.writeFile(outputFile, JSON.stringify(results), {}, () =>
    console.log("file written to " + outputFile)
  )
}

app.listen(port, function() {
  console.log("App listening on port " + port + "!")
})
