import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
});

const CategoryModel = mongoose.model("category", CategorySchema);

export default CategoryModel;
