const postsService = require('../services/posts')

const getAll = async (req, res) => {
  try {
    const posts = await postsService.getAll()
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener posts' })
  }
}

const getById = async (req, res) => {
  try {
    const post = await postsService.getById(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post no encontrado' })
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener post' })
  }
}

const getByAuthor = async (req, res) => {
  try {
    const posts = await postsService.getByAuthor(req.params.authorId)
    res.json(posts)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener posts del autor' })
  }
}

const create = async (req, res) => {
  try {
    const post = await postsService.create(req.body)
    res.status(201).json(post)
  } catch (err) {
    res.status(500).json({ error: 'Error al crear post' })
  }
}

const update = async (req, res) => {
  try {
    const post = await postsService.update(req.params.id, req.body)
    if (!post) return res.status(404).json({ error: 'Post no encontrado' })
    res.json(post)
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar post' })
  }
}

const remove = async (req, res) => {
  try {
    const post = await postsService.getById(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post no encontrado' })
    await postsService.remove(req.params.id)
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar post' })
  }
}

module.exports = { getAll, getById, getByAuthor, create, update, remove }