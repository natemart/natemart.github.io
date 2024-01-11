const http = require('http');
const express = require('express');
const app = express();
 
/*const hostname = '127.0.0.1';*/
const hostname = '0.0.0.0';
const port = 3000;

app.listen(3000, () => {
  console.log("Application started and Listening on port 3000");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.sendFile(__dirname + '/todo.html')
    console.log(__dirname)
});
