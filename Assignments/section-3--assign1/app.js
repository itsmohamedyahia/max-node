const http = require("http");

function requestListener(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2>Hello from the other side</h2>");
    res.write(`
    <form action='/create-user' method='POST'>
      <input type='text' name='username'/>
      <button type='submit'>Submit</button>
    </form>`);
  } else if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write(`<ul>
    <li>User1</li>
    <li>User2</li>
    </ul>`);
  } else if (url === "/create-user" && method === "POST") {
    const body = [];

    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
    });
    res.writeHead(302, { Location: "/" });
  }
  res.end();
}

const server = http.createServer(requestListener);

server.listen(4001);
