const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Have all URLS prefixed with a /api
server.use(
  jsonServer.rewriter({
    "/api/*": "/$1",
  })
);

server.use(router);
server.listen(5000, () => {
  console.log("JSON Server is running");
});

const data = { users: [] }
  // Create 1000 users
  for (let i = 0; i < 1000; i++) {
    data.users.push({ id: i, name: `user${i}` })
  }

server.post(data)