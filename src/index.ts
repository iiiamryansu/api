import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Here is Ryan Su\'s personal API! 😎')
})

app.notFound((c) => {
  return c.json(
    {
      message: 'Sorry, not found! 😬',
      ok: false,
    },
    404,
  )
})

app.get('/hello', (c) => {
  return c.json({
    ok: true,
    message: 'Hello, my name is Ryan Su! 😊',
  })
})

export default {
  port: 2000,
  fetch: app.fetch,
}
