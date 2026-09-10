// Скрипт для однократного переноса товаров из старого db.json в MongoDB.
// Запуск: npm run seed

require('dotenv').config()
const mongoose = require('mongoose')
const fs = require('fs')
const path = require('path')
const Product = require('../models/Product')

async function seed() {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    console.error('MONGODB_URI не задан в .env')
    process.exit(1)
  }

  await mongoose.connect(uri)
  console.log('Подключено к MongoDB')

  const rawData = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8')
  const { products } = JSON.parse(rawData)

  // Очищаем коллекцию перед импортом, чтобы не было дублей при повторном запуске
  await Product.deleteMany({})
  console.log('Старые данные очищены')

  const inserted = await Product.insertMany(products)
  console.log(`Импортировано товаров: ${inserted.length}`)

  await mongoose.disconnect()
  console.log('Готово')
}

seed().catch((error) => {
  console.error('Ошибка миграции:', error)
  process.exit(1)
})
