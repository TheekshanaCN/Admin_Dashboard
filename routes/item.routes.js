const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => {
  res.send('Item route working ✅');
});

module.exports = router;
