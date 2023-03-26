const express = require('express');
const path = require('path');


const port = process.env.PORT || 3000;
const hostname = 'doggfather';


const app = express();
app.use(express.json({ type: 'application/*+json' }));

app.use(express.static(path.join(__dirname, 'build')));


app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    console.log(`Status code for app.get request: ${res.statusCode}`);
});

app.use((req, res) => {
    res.status(404).send('Page not found');
    console.log(`Status code for app.use request: ${res.statusCode}`);
});

// Log any unhandled exceptions
process.on('uncaughtException', (err) => {
    console.error(`Uncaught exception: ${err}`);
})

app.listen()
console.log(`Server running at http://${hostname}:${port}/`);
