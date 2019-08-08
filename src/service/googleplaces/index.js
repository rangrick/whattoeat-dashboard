import TextSearch from "googleplaces/lib/TextSearch.js"
import config from "../../config"

const { apiKey, outputFormat } = config

const textSearch = new TextSearch(apiKey, outputFormat)

const getPlaceByText = text =>
  new Promise((resolve, reject) => {
    textSearch(
      {
        query: text
      },
      function(error, response) {
        if (error) reject(error)
        resolve(response)
      }
    )
  })

export default getPlaceByText
