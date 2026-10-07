const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { Pool } = require("pg");
const jwt = require("jsonwebtoken");
const {authenticate} = require('./authenticate.js');
require('dotenv').config();
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});



const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Backend is running");
});


// Phần backend tạo API nối vào frontend của login.jsx
app.post('/api/auth/login',async (req, res) => {
console.log("Received a request");
const result = await pool.query("SELECT * from users WHERE username = $1", [req.body.username]);
//export infor từ database
if (result.rows.length === 0) {
   return res.status(404).json({ message: "Incorrect Username or password" });
}
const checkPassword = await bcrypt.compare(req.body.password, result.rows[0].password);
if (checkPassword){
    const token = jwt.sign(
    {id : result.rows[0].id},
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
    );
    console.log('login success');
    return res.status(200).json({ token });
    
    
}
else {
    return res.status(401).json({ message: "Incorrect ID or password" });
}
})
// Phần backend tạo API nối vào frontend của feedback.jsx
app.post('/api/auth/comment', authenticate, async (req,res) =>{
    const {content} = req.body;
    const user = await pool.query("SELECT * from users WHERE id = $1", [req.user.id]);
    await pool.query(
    'INSERT INTO comments (displayname, content) VALUES ($1, $2)',
    [user.rows[0].displayname, content]
    );
    //Inserted vào Database
    return res.status(201).json({
    message: "Comment created"
});
})
// Phần backend đọc comments
app.get('/api/viewcomments', async (req,res) => {
    const result = await pool.query('SELECT * FROM comments');
    const comments = result.rows
    res.json(comments);
}

)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});