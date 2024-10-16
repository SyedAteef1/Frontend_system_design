const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

const posts = [
    {
        userid: 1,
        content_text: "ateef",
        link: "www.ateef.com"
    },
    {
        userid: 1,
        content_text: "ateef",
        link: "www.ateef.com"
    },
    {
        userid: 1,
        content_text: "ateef",
        link: "www.ateef.com"
    },
    {
        userid: 1,
        content_text: "ateef",
        link: "www.ateef.com"
    },
    {
        userid: 1,
        content_text: "ateef",
        link: "www.ateef.com"
    },
    // More posts...
];

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port " + port);
});

// Handle GET request for posts
app.get('/posts', (req, res) => {
    // Send posts as a JSON response
    
    res.json(posts); 
});
app.post('/posts', (req, res) => {
    const newPost = req.body; // Get the new post data from the request body
    posts.push(newPost); // Add the new post to the existing posts array
    res.status(201).json(newPost); // Respond with the new post and a 201 status code
});

