const mongoose = require('mongoose');

// Schema
const userSchema = new mongoose.Schema({
	firstname: {
		required: [true, "This field is required"],
		type: String,
	},
	lastname: {
		required: [true, "This field is required"],
		type: String,
	},
	email: {
		required: [true, "This field is required"],
		type: String,
	},
	password: {
		required: [true, "This field is required"],
		type: String,
	},
	isAdmin: {
		type: Boolean,
		default: false,
	},
},
{
	timestamps: true,
}
);

//compile schema into model

const User = mongoose.model("User", userSchema);

module.exports = User;
