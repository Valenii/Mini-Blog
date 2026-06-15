const request = require('supertest')
const app = require('../src/app')

describe('Authors endpoints', () => {

  let authorId

  test('POST /authors - crear autor', async () => {
    const res = await request(app)
      .post('/authors')
      .send({
        name: 'Test Author',
        email: 'test@email.com',
        bio: 'Bio de prueba'
      })
    expect(res.statusCode).toBe(201)
    expect(res.body).toHaveProperty('id')
    expect(res.body.name).toBe('Test Author')
    authorId = res.body.id
  })

  test('GET /authors - listar autores', async () => {
    const res = await request(app).get('/authors')
    expect(res.statusCode).toBe(200)
    expect(Array.isArray(res.body)).toBe(true)
  })

  test('GET /authors/:id - obtener autor', async () => {
    const res = await request(app).get(`/authors/${authorId}`)
    expect(res.statusCode).toBe(200)
    expect(res.body.id).toBe(authorId)
  })

  test('PUT /authors/:id - actualizar autor', async () => {
    const res = await request(app)
      .put(`/authors/${authorId}`)
      .send({
        name: 'Test Author Actualizado',
        email: 'test@email.com',
        bio: 'Bio actualizada'
      })
    expect(res.statusCode).toBe(200)
    expect(res.body.name).toBe('Test Author Actualizado')
  })

  test('GET /authors/:id - autor no encontrado', async () => {
    const res = await request(app).get('/authors/99999')
    expect(res.statusCode).toBe(404)
  })

  test('DELETE /authors/:id - eliminar autor', async () => {
    const res = await request(app).delete(`/authors/${authorId}`)
    expect(res.statusCode).toBe(204)
  })

})