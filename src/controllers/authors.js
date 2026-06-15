const authorsService = require('../services/authors')

const getAll = async (req, res) => {
  try {
    const authors = await authorsService.getAll()
    res.json(authors)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener autores' })
  }
}

const getById = async (req, res) => {
  try {
    const author = await authorsService.getById(req.params.id)
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' })
    res.json(author)
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener autor' })
  }
}

const create = async (req, res) => {
  try {
    const author = await authorsService.create(req.body)
    res.status(201).json(author)
  } catch (err) {
    console.error('ERROR:', err.message) // ← agregá esta línea
    if (err.code === '23505') {
      return res.status(400).json({ error: 'El email ya está registrado' })
    }
    res.status(500).json({ error: 'Error al crear autor' })
  }
}

const update = async (req, res) => {
  try {
    const author = await authorsService.update(req.params.id, req.body)
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' })
    res.json(author)
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar autor' })
  }
}

const remove = async (req, res) => {
  try {
    const author = await authorsService.getById(req.params.id)
    if (!author) return res.status(404).json({ error: 'Autor no encontrado' })
    await authorsService.remove(req.params.id)
    res.status(204).send()
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar autor' })
  }
}

module.exports = { getAll, getById, create, update, remove }