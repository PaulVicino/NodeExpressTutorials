// http module
const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === "/"){
        res.end("Welcome to our home page")
    }

    if (req.url === "/about"){
        res.end("Welcome to about page")
    }

    res.end(`
    <h1> Oops </h1>
    <a href="/"> Home </a>
    `)
})

server.listen(5000)