const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const fetch = require('node-fetch');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/preference_light', (req, res, next) => {
    fetch('https://smart-traffic-light-9acdb.firebaseio.com/preference_light.json')
      .then(response => response.text())
      .then((body) => {
        res.send(body);
      });
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
