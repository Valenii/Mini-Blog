require('dotenv').config()

const express = require('express')
const app = express()

app.use(express.json())

const authorsRoutes  = require('./routes/authors')
const postsRoutes    = require('./routes/posts')
const commentsRoutes = require('./routes/comments')

app.use('/authors',  authorsRoutes)
app.use('/posts',    postsRoutes)
app.use('/comments', commentsRoutes)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Error interno del servidor' })
})

module.exports = app