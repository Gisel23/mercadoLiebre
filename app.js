const express = require('express');
const path = require('path');

const publicPath = path.join(__dirname, 'public');

const app = express();

app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Views/home.html'));
});
app.post('/', (req, res) => res.redirect('/'))
app.get('/register', (req, res) => res.sendFile(path.join(__dirname, './Views/register.html')))
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, './Views/login.html')))


const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
