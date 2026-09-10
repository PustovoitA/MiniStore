const mongoose = require('mongoose')

const colorSchema = new mongoose.Schema(
  {
    color: { type: String, required: true },
    code: { type: String, required: true },
    availability: { type: Boolean, default: true }
  },
  { _id: false }
)

const sizeSchema = new mongoose.Schema(
  {
    size: { type: String, required: true },
    availability: { type: Boolean, default: true }
  },
  { _id: false }
)

const reviewSchema = new mongoose.Schema(
  {
    author: { type: String },
    rating: { type: Number, min: 1, max: 5 },
    comment: { type: String },
    createdAt: { type: Date, default: Date.now }
  },
  { _id: false }
)

const productSchema = new mongoose.Schema(
  {
    // Сохраняем свой человекочитаемый id (IP1, AW1...), как во фронтенде,
    // отдельно от служебного MongoDB _id
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    type: { type: String, required: true }, // 'phone' | 'smart-watches' и т.д.
    price: { type: Number, required: true },
    count: { type: Number, required: true, default: 0 },
    status: {
      type: String,
      enum: ['normal', 'sale', 'new'],
      default: 'normal'
    },
    discount: { type: Number, default: null },
    image: { type: String },
    colors: { type: [colorSchema], default: [] },
    size: { type: [sizeSchema], default: undefined }, // опционально (только для часов)
    description: { type: String },
    reviews: { type: [reviewSchema], default: [] }
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_doc, ret) => {
        delete ret._id
        delete ret.__v
        return ret
      }
    }
  }
)

module.exports = mongoose.model('Product', productSchema)
