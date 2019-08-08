;(function() {
  "use strict"

  exports.apiKey = process.env.GOOGLE_PLACES_API_KEY || ""
  exports.outputFormat = process.env.GOOGLE_PLACES_OUTPUT_FORMAT || "json"
})()
