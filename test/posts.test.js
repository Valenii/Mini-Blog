const request = require('supertest')
const app = require('../src/app')

describe('Posts endpoints', () => {

  let authorId
  let postId

  beforeAll(async () => {
    const res = await request(app)
      .post('/authors')
      .send({
        name: 'Author Para Posts',
        email: 'authorposts@email.com',
        bio: 'Bio'
      })
    authorId = res.body.id
  })

  afterAll(async () => {
    await request(app).delete(`/authors/${authorId}`)
  })

  test('POST /posts - crear post', async () => {
    const res = await request(app)
      .post('/posts')
      .send({
        author_id: authorId,
        title: 'Post de prueba',
        content: 'Contenido de prueba',
        published: false
      })
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
    postId = res.body.id
  })

  test('GET /posts - listar posts', async () => {
    const res = await request(app).get('/posts')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('GET /posts/:id - obtener post', async () => {
    const res = await request(app).get(`/posts/${postId}`)
    expect(res.statusCode).toBe(200)
    expect(res.body.id).toBe(postId)
  })

  test('GET /posts/author/:authorId - posts por autor', async () => {
    const res = await request(app).get(`/posts/author/${authorId}`)
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('PUT /posts/:id - actualizar post', async () => {
    const res = await request(app)
      .put(`/posts/${postId}`)
      .send({
        title: 'Post actualizado',
        content: 'Contenido actualizado',
        published: true
      })
    expect(res.statusCode).toBe(200)
    expect(res.body.title).toBe('Post actualizado')
  })

  test('GET /posts/:id - post no encontrado', async () => {
    const res = await request(app).get('/posts/99999')
    expect(res.statusCode).toBe(404)
  })

  test('DELETE /posts/:id - eliminar post', async () => {
    const res = await request(app).delete(`/posts/${postId}`)
    expect(res.statusCode).toBe(204)
  })

})