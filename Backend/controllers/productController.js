const Product = require('../models/Product')

// GET /api/products
// Поддерживает простую фильтрацию через query-параметры: ?type=phone&status=sale
async function getAllProducts(req, res) {
  try {
    const filter = {}
    if (req.query.type) filter.type = req.query.type
    if (req.query.status) filter.status = req.query.status

    const products = await Product.find(filter)
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении товаров', error: error.message })
  }
}

// GET /api/products/:id
async function getProductById(req, res) {
  try {
    const product = await Product.findOne({ id: req.params.id })
    if (!product) {
      return res.status(404).json({ message: 'Товар не найден' })
    }
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при получении товара', error: error.message })
  }
}

// POST /api/products
async function createProduct(req, res) {
  try {
    const product = await Product.create(req.body)
    res.status(201).json(product)
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ message: 'Товар с таким id уже существует' })
    }
    res.status(400).json({ message: 'Ошибка при создании товара', error: error.message })
  }
}

// PUT /api/products/:id
async function updateProduct(req, res) {
  try {
    const product = await Product.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true, runValidators: true }
    )
    if (!product) {
      return res.status(404).json({ message: 'Товар не найден' })
    }
    res.json(product)
  } catch (error) {
    res.status(400).json({ message: 'Ошибка при обновлении товара', error: error.message })
  }
}

// DELETE /api/products/:id
async function deleteProduct(req, res) {
  try {
    const product = await Product.findOneAndDelete({ id: req.params.id })
    if (!product) {
      return res.status(404).json({ message: 'Товар не найден' })
    }
    res.json({ message: 'Товар удалён' })
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при удалении товара', error: error.message })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
}
