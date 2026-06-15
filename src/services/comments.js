const pool = require('../db/index')

const getByPost = async (postId) => {
  const result = await pool.query(`
    SELECT comments.*, authors.name AS author_name
    FROM comments
    JOIN authors ON comments.author_id = authors.id
    WHERE comments.post_id = $1
    ORDER BY comments.created_at ASC
  `, [postId])
  return result.rows
}

const create = async ({ post_id, author_id, content }) => {
  const result = await pool.query(
    'INSERT INTO comments (post_id, author_id, content) VALUES ($1, $2, $3) RETURNING *',
    [post_id, author_id, content]
  )
  return result.rows[0]
}

module.exports = { getByPost, create }