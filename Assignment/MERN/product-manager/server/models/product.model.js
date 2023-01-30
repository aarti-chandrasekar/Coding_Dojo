const mongoose = require("mongoose");

    const ProductSchema = new mongoose.Schema(
      {
        title: {
          type: String,
          required: [true, "Title is required"],
          maxlength: [50, "Title cannot be more than 50 characters long"]
        },
        description: {
          type: String,
          maxlength: [100, "Description cannot be more than 100 characters long"]
        },
        price: {
          type: Number,
          required: [true, "Price is required"],
          min: [0, "Price cannot be negative"],
        },
      },
      { timestamps: true }
    );

    const Product = mongoose.model("Product", ProductSchema);

    module.exports = Product;
