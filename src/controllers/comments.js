const commentsService = require('../services/comments')

const getByPost = async (req, res) => {
  try {
    const comments = await commentsService.getByPost(req.params.postId)
    res.json(comments)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener comentarios' })
  }
}

const create = async (req, res) => {
  try {
    const comment = await commentsService.create(req.body)
    res.status(201).json(comment)
  } catch (err) {
    console.error('ERROR COMENTARIO:', err.message) // ← agregá esta línea
    res.status(500).json({ error: 'Error al crear comentario' })
  }
}

module.exports = { getByPost, create }