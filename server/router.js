const express = require ('express');
const model = require('../database/index.js')
const router = express.Router();

router.get('/api/data', (req, res) => {
  model.users.find({}).sort({date: -1}).limit(5).exec((err, data) => {
    if (err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})

router.get('/api/data/all', (req, res) => {
  model.users.find({}).sort({date: -1}).exec((err,data) => {
    if(err) {
      console.log(err)
    } else {
      res.send(data);
    }
  })
})

module.exports = router;