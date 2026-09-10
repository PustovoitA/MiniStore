require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const productRoutes = require('./routes/products')

const app = express()

// Подключаемся к MongoDB перед стартом сервера
connectDB()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ message: 'MiniStore API is running' })
})

app.use('/api/products', productRoutes)

// Обработка несуществующих роутов
app.use((req, res) => {
  res.status(404).json({ message: 'Роут не найден' })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
