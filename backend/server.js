import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql2/promise'
import cors from 'cors'
import argon2 from 'argon2'

dotenv.config()
const app = express()

const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = ['http://localhost:5173', 'https://localhost:3001']
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  connectionLimit: 10,
  queueLimit: 0
})

app.use(cors(corsOptions))
app.use(express.json())

app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing required inputs" })
  }

  try {
    const hashedPassword = await argon2.hash(password, { type: argon2.argon2id })

    const [response] = await pool.query(`
      INSERT INTO users (username, email, password)
      VALUES (?, ?, ?)
    `, [username, email, hashedPassword])

    res.status(201).json({ message: "User registered successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: "Internal server error" })
  }
})

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})




app.post('/auth/login', async (req, res) => {
  const { email, password }= req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Missing required inputs" })
  }

  
})