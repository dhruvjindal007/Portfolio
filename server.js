const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

// dotenv config
dotenv.config()

// rest object
const app = express()

// middlewares
app.use(cors())
app.use(express.json())

// root route for testing
app.get('/', (req, res) => {
  res.send('API is running...')
})

// routes
app.use('/api/v1/portfolio', require('./routes/portfolioRoute'))

// port
const PORT = process.env.PORT || 8080

// listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
