const express = require('express');
const path =require('path')
const app = express();
const port = 3000;   

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve the HTML file
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})
// Route to handle the login form POST request
app.post('/login', (req, res) => {
    let { Username, Password } = req.body;
    console.log('Username:', Username);
    console.log('Password:', Password);
    Username+='the'
    console.log(Username)
    res.send('Login successful!');
});

// Start the server
app.listen(port, () => {
    console.log(`The server is connected to port ${port}`);
});
