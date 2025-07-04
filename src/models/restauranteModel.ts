import mongoose from "mongoose";

const menuItemSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: String,
        requeried: true
    }
})

const restauranteSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User"},
    restauranteName: { type: String, required: true},
    city: { type: String, required: true},
    country: { type: String, required: true},
    deliveryPrice: { type: Number, required: true},
    estimatedDeliveryTime: { type: Number, required: true},
    cuisines: [{ type: String, required: true}],
    menuItems: [menuItemSchema],
    imageUrl: { type: String, required: true},
    lastUpdate: { type: Date, required: true},
})

export default mongoose.model("Restaurant", restauranteSchema);