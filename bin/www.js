const http = require("http");
const serverHandler = require("../app");

const domain = "http://127.0.0.1";
const port = 8888;
const server = http.createServer(serverHandler);

server.listen(port, () => {
  console.log(`server runing  ${domain}:${port}`);
});
