const http = require("http");
const host = "localhost";
const port = "8000";

const userController = require("./users");

const server = http.createServer((req, res) => {
    res.end("hello word")
})

console.log(userController.creatUser());
