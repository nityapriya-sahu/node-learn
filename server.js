const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/mypage") {
    res.end("Welcome to my page");
  } else {
    res.end("Hello Chintesh! You created a server");
  }
});
server.listen(7777, () => {
  console.log("Server is listening on port 7777");
});
