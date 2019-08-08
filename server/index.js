const TextSearch = require("googleplaces/lib/TextSearch.js")
const config = require("./config/config.js")
const textSearch = new TextSearch(config.apiKey, config.outputFormat)

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

app.listen(port, function() {
  console.log("App listening on port " + port + "!")
})
