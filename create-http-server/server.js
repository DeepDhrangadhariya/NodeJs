const http = require("http");

const port = 2000
const hostname = 'localhost'

const server = http.createServer((req,res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('First Time Created This Http Server\n')
})

server.listen(port, hostname, () => {
    console.log("Server Runnig")
})