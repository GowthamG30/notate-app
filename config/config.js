require("dotenv").config();

module.exports = {
	PORT: process.env.PORT || 5001,
	MONGO_URI: process.env.MONGO_URI,
	NODE_ENV: process.env.NODE_ENV,
};
