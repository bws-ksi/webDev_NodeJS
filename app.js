const { error } = require('console')
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Server request')
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'application/json')
  // res.write('<head><link rel="stylesheet" href="#"></head>')
  // res.write('<h1>Hello node</h1>')
  // res.write('<p>My name lorem</p>')

  const data = JSON.stringify([
    { name: 'Tommy', age: 35 },
    { name: 'Arthur', age: 40 }
  ])

  res.end(data)
})

server.listen(3000, 'localhost', error => {
  error ? console.log(error) : console.log('listening port 3000')
})
