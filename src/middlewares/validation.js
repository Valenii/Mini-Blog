const validateAuthor = (req, res, next) => {
  const { name, email } = req.body
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'El nombre es requerido' })
  }
  if (!email || email.trim() === '') {
    return res.status(400).json({ error: 'El email es requerido' })
  }
  next()
}

const validatePost = (req, res, next) => {
  const { title, content, author_id } = req.body
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'El título es requerido' })
  }
  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'El contenido es requerido' })
  }
  if (!author_id) {
    return res.status(400).json({ error: 'El author_id es requerido' })
  }
  next()
}

const validatePostUpdate = (req, res, next) => {
  const { title, content } = req.body
  if (!title || title.trim() === '') {
    return res.status(400).json({ error: 'El título es requerido' })
  }
  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'El contenido es requerido' })
  }
  next()
}

const validateComment = (req, res, next) => {
  const { post_id, author_id, content } = req.body
  if (!post_id) {
    return res.status(400).json({ error: 'El post_id es requerido' })
  }
  if (!author_id) {
    return res.status(400).json({ error: 'El author_id es requerido' })
  }
  if (!content || content.trim() === '') {
    return res.status(400).json({ error: 'El contenido es requerido' })
  }
  next()
}

module.exports = { validateAuthor, validatePost, validatePostUpdate, validateComment }