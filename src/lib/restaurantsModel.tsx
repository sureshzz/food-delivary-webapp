
import mongoose from "mongoose"

const restaurantModel = new mongoose.Schema({
  name:{type:String},
  email:{type:String},
  password:{type:String, required:true},
  address:{type:String},
  contact:{type:Number}

});

export const restaurantSchema = mongoose.models.restaurants || mongoose.model("restaurants", restaurantModel);