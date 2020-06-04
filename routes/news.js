var express = require('express');
var router = express.Router();
const { getArticles } = require('../tools/newsapi');

/* POST news listing. */
router.post('/', async function (req, res, next) {

  console.log(req.body || 'no info with post request')
  try {
    let newsServerResponse = await getArticles(req.body.url);

    res.json(newsServerResponse);
    
  } catch (e) {
    console.log(e)
    console.log('there was an error')
    res.status(400).send(e);
  }

});

module.exports = router;
