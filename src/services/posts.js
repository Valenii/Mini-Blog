const pool = require('../db/index')

const getAll = async () => {
  const result = await pool.query('SELECT * FROM posts ORDER BY created_at DESC')
  return result.rows
}

const getById = async (id) => {
  const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id])
  return result.rows[0]
}

const getByAuthor = async (authorId) => {
  const result = await pool.query(`
    SELECT posts.*, authors.name AS author_name, authors.email AS author_email
    FROM posts
    JOIN authors ON posts.author_id = authors.id
    WHERE posts.author_id = $1
    ORDER BY posts.created_at DESC
  `, [authorId])
  return result.rows
}

const create = async ({ author_id, title, content, published }) => {
  const result = await pool.query(
    'INSERT INTO posts (author_id, title, content, published) VALUES ($1, $2, $3, $4) RETURNING *',
    [author_id, title, content, published ?? false]
  )
  return result.rows[0]
}

const update = async (id, { title, content, published }) => {
  const result = await pool.query(
    'UPDATE posts SET title=$1, content=$2, published=$3 WHERE id=$4 RETURNING *',
    [title, content, published, id]
  )
  return result.rows[0]
}

const remove = async (id) => {
  await pool.query('DELETE FROM posts WHERE id = $1', [id])
}

module.exports = { getAll, getById, getByAuthor, create, update, remove }