// routes/ordersRoutes.js
const express = require("express");
const router = express.Router();
const {
  getAllOrders,
  createOrder,
  getOrder,
} = require("../controllers/ordersController");

router.get("/", getAllOrders);
router.post("/", createOrder);
router.get("/:id", getOrder);

module.exports = router;
