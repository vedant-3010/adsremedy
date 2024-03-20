// controllers/ordersController.js
const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");

const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find();
  res.json(orders);
});

const createOrder = asyncHandler(async (req, res) => {
  const order = new Order({
    productId: req.body.productId,
    quantity: req.body.quantity,
  });
  const newOrder = await order.save();
  res.status(201).json(newOrder);
});

const getOrder = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: "Order not found" });
  }
});

module.exports = {
  getAllOrders,
  createOrder,
  getOrder,
};
