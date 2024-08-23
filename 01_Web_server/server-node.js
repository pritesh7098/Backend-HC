const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

// http server creation
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("content-type", "text/plain");
    res.end("hello chai");
  } else if (req.url === "/a") {
    res.statusCode = 200;
    res.setHeader(" content-type", "text/plain");
    res.end("hello chai but bohot garm hain bhai ");
  } else {
    res.statusCode = 404;
    res.setHeader(" content-type", "text/plain");
    res.end("404 NOT FOUND ");
  }
});

// listing on http://localhost
server.listen(port, hostname, () => {
  console.log("Server running successfully");

  console.log(`server is listening at http://${hostname}:${port}`);
});

