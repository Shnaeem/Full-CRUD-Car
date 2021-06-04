const db = require("../db");
const carBrand = require("../models/carB");

db.on("error", console.error.bind(console, "MongoDB failed to connect."));

const main = async () => {
	const brands = [
		{
			title: "Toyota",
			origin: "Japan",
			url: "https://www.toyota.com/",
		},
		{
			title: "Mercedes",
			origin: "Germany",
			url: "https://www.mbusa.com/en/home",
		},
		{
			title: "Jaguar",
			origin: "United Kingdom",
			url: "https://www.jaguarusa.com/index.html",
		},
		{
			title: "Hyundai",
			origin: "Japan",
			url: "https://www.hyundaiusa.com/us/en",
		},
		{
			title: "Honda",
			origin: "Japan",
			url: "https://automobiles.honda.com/",
		},
	];

	await carBrand.insertMany(brands);
	console.log("These are all car brands!");
};

const run = async () => {
	await main();
	db.close();
};

run();
