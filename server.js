const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const productsRouter = require('./routes/productsRoutes');
const ordersRouter = require('./routes/ordersRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();
const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
