const express = require('express');

const emojis = require('./emojis');
const translate = require('./translate');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);
router.use('/translate', translate);

module.exports = router;
