/* Server dependenvies */
import http from 'http'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import api from './api'

const app = express()
const port = 3031

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Load the API routes and use behind /api prefix
app.use('/api', api)


// Create and run the server
const server = http.createServer(app)

server.listen(port, () => { console.log(`Server running on port ${port}`)})