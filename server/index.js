const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const app = express();

const port = 8000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname, '../')));

app.get('/bundle.js/3001', (req, res) => {
  request('http://localhost:3001/bundle.js', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})


app.get('/bundle.js/3002', (req, res) => {
  request('http://localhost:3002/bundle.js', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})

app.get('/bundle.js/3003', (req, res) => {
  request('http://localhost:3003/bundle.js', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})

app.get('/bundle.js/3004', (req, res) => {
  request('http://localhost:3004/bundle.js', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})

app.get('/bundle.js/3006', (req, res) => {
  request('http://localhost:3006/bundle.js', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})

app.use('/api/simexp', (req, res) => {
  request('http://localhost:3001/api/simexp?starRating=5', (error, response, body) => {
    if(!error) {
      console.log('bundle 3001 recieved')
      res.status(200).send(body)
    }
  })
})

app.use('/events', (req, res) => {
  request('http://localhost:3002/events', (error, response, body) => {
    if(!error) {
      console.log('bundle 3002 recieved')
      res.status(200).send(body)
    }
  })
})

app.use('/api/when', (req, res) => {
  request('http://localhost:3003/api/when', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})

app.use('/api/where', (req, res) => {
  request('http://localhost:3003/api/where', (error, response, body) => {
    if (!error) {
      res.status(200).send(body);
    }
  })
})
app.use('/api/data/all', (req, res) => {
  request('http://localhost:3004/api/data/all', (error, response, body) => {
    if(!error) {
      console.log('bundle 3004 recieved')
      res.status(200).send(body)
    }
  })
})

app.use('/api/data', (req, res) => {
  request('http://localhost:3004/api/data', (error, response, body) => {
    if(!error) {
      console.log('bundle 3004 recieved')
      res.status(200).send(body)
    }
  })
})

app.use('/sidebar/wolfencounter', (req, res) => {
  request('http://localhost:3006/sidebar/wolfencounter', (error, response, body) => {
    if(!error) {
      console.log('bundle 3006 recieved')
      res.status(200).send(body)
    }
  })
})

app.listen(port, () => console.log(`Server is running on port: ${port}`));