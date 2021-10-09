var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')

require('dotenv').config()

const MEANING_CLOUD_API = process.env.MEANING_CLOUD_API;
const axios = require("axios")

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/test', async function (req, res) {
    const {body} = req.body;
    const meanningCloudAPI = `https://api.meaningcloud.com/sentiment-2.1?key=${MEANING_CLOUD_API}&txt=${body}&lang=en`;
    try{
        let response = await axios.post(meanningCloudAPI);
        let {sentence_list} = response.data
        return res.json(sentence_list);
    } catch (error){
        console.log({error})
    }
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
