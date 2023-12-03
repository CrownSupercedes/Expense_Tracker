#!/usr/bin/env node

const mongoose = require("mongoose");


const dbConnect = async () => {
	try {
		const dbUrl = process.env.MONGODB_URL || "mongodb+srv://Adetops:dyKAkpL24oXLNvbo@expense-tracker.i23xmim.mongodb.net/?retryWrites=true&w=majority";
		await mongoose.connect(dbUrl, {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		});
		console.log(`DB is connected succesfully!`);
	}
	catch (error) {
		console.log(`Error connecting to the database: ${error.message}`);
	}
};

module.exports = dbConnect;
