const http = require('http')

const PORT = 3000

const server = http.createServer((req, res) => {
  console.log('Server request')

  res.setHeader('Content-Type', 'text/html')
})

server.listen(PORT, 'localhost', error => {
  error ? console.log(error) : console.log(`listening port ${PORT}`)
})
