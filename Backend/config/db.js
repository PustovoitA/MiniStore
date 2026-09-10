const mongoose = require('mongoose')

async function connectDB() {
  const uri = process.env.MONGODB_URI

  if (!uri) {
    console.error('MONGODB_URI не задан в переменных окружения (.env)')
    process.exit(1)
  }

  try {
    await mongoose.connect(uri)
    console.log('MongoDB подключена успешно')
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error.message)
    process.exit(1)
  }
}

module.exports = connectDB
