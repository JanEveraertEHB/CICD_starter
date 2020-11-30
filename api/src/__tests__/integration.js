const supertest = require('supertest')
const http = require('http');

const app = require('../index.js')
const request = supertest(app)


describe('test question endpoint', () => {
   test('if bad input resolves', async (done) => {
    const response = await request.post('/question').send({})
    expect(response.status).toBe(400)
    done();
  })

   test('if bad input resolves', async (done) => {
    const response = await request.post('/questions').send({})
    expect(response.status).toBe(404)
    done();
  })

  test('if bad input resolves', async (done) => {
    try {
      const response = await request.get('/questions').send({})
      expect(response.status).toBe(404)
      done();
    }
    catch(e) {
    }
  })

  test('if bad input resolves', async (done) => {
    const response = await request.post('/question').send({q: "Don't do this to me"})
    expect(response.status).toBe(400)

    done();
  })

  test('if bad input resolves', async (done) => {
    const response = await request.post('/question').send({question: "You are evil"})
    expect(response.body.answer).toBe(":(")

    done();
  })


  test('if bad input resolves', async (done) => {
    const response = await request.post('/question').send({question: "Don't do this to me"})
    expect(response.body.answer).toBe(":)")

    done();
  })
})