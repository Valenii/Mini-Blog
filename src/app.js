require('dotenv').config()

const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

const app = express()

app.use(express.json())

// Cargar el archivo OpenAPI
const swaggerDocument = YAML.load('./openapi.yaml')

// Ruta de documentación Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Rutas principales
const authorsRoutes = require('./routes/authors')
const postsRoutes = require('./routes/posts')
const commentsRoutes = require('./routes/comments')

app.use('/authors', authorsRoutes)
app.use('/posts', postsRoutes)
app.use('/comments', commentsRoutes)

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' })
})

// Ruta 404
app.use((req, res) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Error interno del servidor' })
})

module.exports = app