var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

module.exports = router;
