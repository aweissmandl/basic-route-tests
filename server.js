const express = require('express');
const app = express();

app.use(express.json());
app.set('view engin', 'ejs');

// Serve all static files from the public folder.
app.use(express.static('public'));

// Handle the login form submission.
app.post('/login', (req, res) => {
  try {
    // Get the username and password from the request body.
    const { username, password } = req.body;

    // For demonstration purposes, simply respond with the username and password.
    res.send(`Username: ${username}, Password: ${password}`);
  } catch (error) {
    // If there is an error, send the error message.
    res.send(error.message);
  }
});

app.get('/template',(req,res) => {
  res.render('index.ejs',{userName :req.query.name});
});

// Export the app so that it can be started in the tests.
module.exports = app;
