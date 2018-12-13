const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Topping = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

const pizzaTopping = new Schema({
  defaultSelected: { type: Boolean, require: true },
  topping: { type: Topping, required: true },
});

const pizzaSchema = new Schema({
  basePrice: { type: Number, required: true },
  maxToppings: { type: Number, required: true },
  toppings: { type: Array(pizzaTopping), required: true },
  createdAt: { type: Date, default: Date.now },
});

const Pizza = mongoose.model('Pizza', pizzaSchema);

module.exports = Pizza;
