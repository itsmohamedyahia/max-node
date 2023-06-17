const fs = require("fs");

const rqListener = (req, res) => {
  console.log(req.headers);
  // console.log(req.url, req.method, req.headers);
  // process.exit()
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>lets go</html>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text'/name='message'><button type='submit'>Send</button></form></body>"
    );
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      console.log(body);
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      console.log(message);
      fs.writeFileSync("message.txt", message);
      res.writeHead(302, { Location: "/" });
      return res.end();

      // fs.writeFile("message.txt", message, (err) => {
      //   res.writeHead(302, { Location: "/" });
      //   return res.end();
      // });
    });
    // res.statusCode = 302;
    // res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>Say hi to my little friend</html>");
  res.end();
};

// module.exports = {
//   rqListener: rqListener,
//   someText: "text",
// };

// module.exports.rqListener = rqListener;
// module.exports.someText = "text";

module.exports = rqListener;
