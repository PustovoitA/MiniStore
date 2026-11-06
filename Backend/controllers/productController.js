const Product = require('../models/Product')

// GET /api/products
// Фильтрация: ?type=phone&status=sale
// Пагинация: ?_page=1&_limit=5 (общее число товаров приходит в заголовке X-Total-Count)
async function getAllProducts(req, res) {
  try {
    const filter = {}
    if (req.query.type) filter.type = req.query.type
    if (req.query.status) filter.status = req.query.status

    const page = Number(req.query._page)
    const limit = Number(req.query._limit)

    let query = Product.find(filter).sort({ _id: 1 }) // стабильный порядок, иначе страницы могут "плавать"
    if (page > 0 && limit > 0) {
      query = query.skip((page - 1) * limit).limit(limit)
    }

    const [products, total] = await Promise.all([
      query,
      Product.countDocuments(filter)
    ])

    res.set('X-Total-Count', String(total))
    res.set('Access-Control-Expose-Headers', 'X-Total-Count') // иначе браузер скроет заголовок от фронтенда
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

// PATCH /api/products/:id/purchase
// Тело запроса: { "quantity": 3 } — сколько штук куплено
async function purchaseProduct(req, res) {
  try {
    const { quantity } = req.body

    if (!Number.isInteger(quantity) || quantity <= 0) {
      return res.status(400).json({ message: 'Некорректное количество' })
    }

    const product = await Product.findOneAndUpdate(
      { id: req.params.id, count: { $gte: quantity } }, // только если остатка хватает
      { $inc: { count: -quantity } },                   // вычитание делает сама БД
      { new: true }                                     // вернуть уже обновлённый товар
    )

    if (!product) {
      return res.status(409).json({ message: 'Товара недостаточно на складе или он не найден' })
    }

    res.json(product)
  } catch (error) {
    res.status(500).json({ message: 'Ошибка при оформлении покупки', error: error.message })
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
  purchaseProduct,
  deleteProduct
}