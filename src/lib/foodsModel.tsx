import mongoose, { Schema } from "mongoose";

const foodsModel = new mongoose.Schema({
  name: { type: String },
  price: { type: String },
  path: { type: String },
  description: { type: String },
  restaurant_id : mongoose.Schema.Types.ObjectId,
});

export const foodSchema = mongoose.models.foods || mongoose.model("foods",foodsModel);