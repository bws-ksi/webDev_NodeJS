const { error } = require('console')
const http = require('http')
const server = http.createServer((req, res) => {
  console.log('Server request')
  console.log(req.url, req.method)

  res.setHeader('Content-Type', 'text/html')
  res.write('<head><link rel="stylesheet" href="#"></head>')
  res.write('<h1>Hello node</h1>')
  res.write('<p>My name lorem</p>')
  res.end()
})

server.listen(3000, 'localhost', error => {
  error ? console.log(error) : console.log('listening port 3000')
})
