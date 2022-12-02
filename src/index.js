import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send('<h1>Welcome to Express</h1>')
});

app.get("/about", (req, res) => {
    res.send('<h1>About</h1>')
});

app.listen(3000);
console.log("Server on port 3000");