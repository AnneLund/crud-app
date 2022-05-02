import http from 'http';
import express from 'express';

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Hello World!');
    response.end();
}).listen(4000)

const app = express();

app.listen(4242, () => {
    console.log("Express server kører....");
});

app.get("/", (req, res) => {
    res.send('Hej verden!');
});

app.get("/", (req, res) => {
     res.send('Hej verden!');
});

app.get('/about', (req, res) => {
      res.send('Dette er about siden...');
})

app.get('/contact', (req, res) => {
      res.send('Dette er kontakt siden...');
});

app.use((req, res, next) => {
    res.status(404).send("Siden blev ikke fundet")
})

