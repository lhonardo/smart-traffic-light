const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get("/preference_light", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
  })
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
