const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the CORS package

const app = express();

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        message: "List of users",
        data: users
    });
});

app.post('/users', (req, res) => {
    const user = {
        id: users.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    users.push(user);
    res.status(201).json({
        success: true,
        message: "User created",
        data: user
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
