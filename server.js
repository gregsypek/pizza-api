// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middleware = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middleware);
// server.use(router);
// server.listen(port);
const express = require("express");
const jsonServer = require("json-server");

const app = express();
const jsonServerApp = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = process.env.PORT || 3000;

// Use the JSON Server middleware
jsonServerApp.use(middleware);
jsonServerApp.use(router);

// Define additional Express endpoints
app.get("/api/pizzas", (req, res) => {
	const pizzas = require("./db.json").pizzas;
	res.json(pizzas);
});

app.get("/api/menu", (req, res) => {
	const pizzas = require("./db.json").pizzas;
	res.json({ data: pizzas });
});

// Mount the JSON Server app under the /api path
app.use("/api", jsonServerApp);

// Start the server
app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
