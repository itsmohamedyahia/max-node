const http = require("http");
const rqListener = require("./routes");

const server = http.createServer(rqListener);

server.listen(3030);
