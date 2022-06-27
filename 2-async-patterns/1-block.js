const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/'){
        res.end("Welcome to our home page")
    }

    if (req.url === '/about'){

        // blocking code
        for (let i = 0; i < 1000; i++)
        {
            for (let j = 0; j < 1000; j++)
            {
                console.log("blah")
            }
        }

        res.end("Welcome to about page")
    }

    res.end('Error Page')
})

server.listen(5000, () => {
    console.log("server on port 5000")
})