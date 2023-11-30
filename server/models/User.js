const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const cartSchema = new Schema({
    productId: {
        type: String,
        required: true
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    }
})

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, "Must match an email address!"],
        },
        password: {
            type: String,
            required: true,
        },
        cart: [cartSchema],
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.virtual("cartCount").get(function (){
    return this.cart.length;
})

userSchema.virtual("cartTotal").get(function (){
    let total = 0;
    for (let i = 0; i < this.cart.length; i++){
        total = total + this.cart[i].price;
    }
    return total;
})

const User = model("User", userSchema);

module.exports = User;