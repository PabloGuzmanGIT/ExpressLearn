const http = require("http")

const server = http.createServer((req, res) => {

    //console.log(req)
    res.writeHead(200,{"content-type":"text/html"})
    const homePageHTML = fs.readFileSync("node.html")
    res.write(homePageHTML)
    res.end()

})

server.listen(3200)
