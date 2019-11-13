// Packages
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const axios = require('axios')

// Initialising express app
const app = express()

dotenv.config()


// Global Middleware
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())



// Routes
app.get('/', (req, res) => {
  try {
    res.send('Server is working ✅')
  } catch (error) {
    res.status(500).send('Something went wrong ❌')
  }
})

// // Port that server listens on
const PORT = process.env.PORT || 5000
app.listen(PORT, () =>  console.log(`Listening on port ${PORT} ✅`))