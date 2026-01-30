const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    const envVar = process.env.MY_VAR;
    console.log(
      `Processing request from ${server.address().address} port ${server.address().port}`,
    );

    if (envVar) {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`Environment variable has value: ${envVar}`);
    } else {
      res.writeHead(400, { "Content-Type": "text/plain" });
      res.end("Error: Environment variable MY_VAR is not set");
    }
  } else {
    res.writeHead(405, { "Content-Type": "text/plain" });
    res.end("Method Not Allowed");
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
