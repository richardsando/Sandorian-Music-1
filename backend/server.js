//dependencies
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

// `https://api.musixmatch.com/ws/1.1/artist.search?=prodigy?apikey=${process.env.MUSIC_API_KEY}`

app.post('/search', async (req, res) => {
  try {
    const {
      search
    } = req.body
    // const {} search = "Kanye West"
    console.log(search)
    const response = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${search}&apikey=${process.env.API_KEY}`)
    res.send(response.data)

  } catch (err) {
    console.log(err)
  }
})

// get stuff from artist id
app.post('/:id', async (req, res) => {
  try {
    const id = req.params.id
    // const {} search = "Kanye West"
    console.log(id)
    const response = await axios.get(`https://api.musixmatch.com/ws/1.1/artist.search?q_artist=${search}&apikey=${process.env.MUSIC_API_KEY}`)
    res.send(response.data)

  } catch (err) {
    console.log(err)
  }

})


// // Port that server listens on
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Listening on port ${PORT} ✅`))