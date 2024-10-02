// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();
const DB =
  "mongodb+srv://ecommapp:DFfWpdmlnhCv8qFy@ecommerceapp.w5it7.mongodb.net/";

// middleware
app.use(express.json());
app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "172.20.10.2", () => {
  console.log(`connected at port ${PORT}`);
});
