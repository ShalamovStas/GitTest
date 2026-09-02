const http = require("http");
const url = require("url");
const cp = require("child_process");

const server = http.createServer((req, res) => {
  const file = url.parse(req.url, true).query.path;

  cp.execSync(`wc -l ${file}`);

  res.end("done");
});

server.listen(3000);