const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify({ message: "drone is nice" }));
});

const port = process.env.PORT ?? 3000;

server.listen(port, () => {
  console.log(`Listening on ${port}...`);
});

server.on("error", (error) => {
  console.error(error);
  server.close();
});
