const User = require("../../model/User");
//Register
const registerUser = async (req, res) => {
	const { firstname, lastname, email, password } = req?.body;
	try {
		//check if user exists
		const userExists = await User.findOne({ email });
		if (userExists) {
			return res.json('user exists');
		}
		const user = await User.create({ firstname, lastname, email, password });
		return res.status(200).json(user);
	} catch (error) {
		return res.json(error);
	}
};

module.exports = registerUser;
