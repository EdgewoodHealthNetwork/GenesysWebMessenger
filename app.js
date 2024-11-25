const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (like CSS) from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the homepage
app.get('/', (req, res) => {
    const data = {
        title: 'Dynamic Website',
        message: 'Welcome to our dynamic site!',
        currentTime: new Date().toLocaleString()
    };
    res.render('index', data);  // Render index.ejs and pass data
});

// Start the server
app.listen(port, () => {
    console.log('Server is running on http://localhost:3000');
});