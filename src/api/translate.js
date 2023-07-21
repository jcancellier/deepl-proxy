const express = require('express');
const axios = require('axios');

const router = express.Router();

const apiUrl = 'https://api-free.deepl.com/v2/translate'; // Replace with your API endpoint
const apiKey = process.env.DEEPL_API_KEY; // Replace with your actual API key

// Headers to be included in the request
const headers = {
  'Content-Type': 'application/json', // Setting the content type to JSON
  'Authorization': `DeepL-Auth-Key ${apiKey}`, // Adding an Authorization header with an API key
};

router.post('/', (req, res) => {
    const requestData = {
        text: [req.body.text],
        target_lang: req.body.target_lang
    }

    axios.post(apiUrl, requestData, { headers })
    .then((response) => {
      console.log('Response Data:', response.data);
      res.json(response.data)
    })
    .catch((error) => {
      console.error('Error:', error.message);
      res.status(407).json({ error: error.message })
    });
});

module.exports = router;
