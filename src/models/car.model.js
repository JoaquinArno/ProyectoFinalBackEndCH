import { model, Schema } from "mongoose";

const cartSchema = Schema({

    products: [{
        quantity: { type: Number, default: 1 },
        title: { type: String },
        price: { type: Number },
        category: { type: String },
        thumbnail: { type: String }
    }],

    username: { type: String },
    email: { type: String },
    time: { type: String },
    address: { type: String }
    
});

export const Carts = model("cart", cartSchema);