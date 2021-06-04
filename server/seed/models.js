const db = require("../db");
const carModel = require("../models/carM");

db.on("error", console.error.bind(console, "MongoDB failed to connect."));

const main = async () => {
	const models = [
		{
			model: "Corolla",
			carType: "Sedan",
			image: "https://upload.wikimedia.org/wikipedia/commons/a/a4/2019_Toyota_Corolla_Icon_Tech_VVT-i_Hybrid_1.8.jpg",
			brand: "Toyota",
		},
		{
			model: "c300",
			carType: "Sedan",
			image:"https://m.media-amazon.com/images/I/61v8PY3mH8L._UY560_.jpg",
			brand: "Mercedes",
		},
		{
			model: "xj 2019",
			carType: "sports",
			image: "https://www.autotrader.com/wp-content/uploads/2020/02/2019-Jaguar-XJ-.1..jpg",
			brand: "Jaguar",
		},
		{
			model: "Tucson",
			carType: "SUV",
			image: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Hyundai_Tucson_2.0_CRDi_4WD_Premium_%28III%29_%E2%80%93_Frontansicht%2C_5._September_2015%2C_D%C3%BCsseldorf_%28colour_corrected%29.jpg",
			brand: "Hyundai",
		},
		{
			model: "accord sports",
			carType: "sedan",
			image: "https://www.cnet.com/a/img/4N-EuhVhbtZykbRS0U7COYEDWxc=/1200x675/2020/04/09/dadba2be-94d8-400f-b59c-3773b77b3973/2020-honda-accord-sport-20t-1.jpg",
			brand: "Honda",
		},
	];

	await carModel.insertMany(models);
	console.log("Car models are loaded!!");
};

const run = async () => {
	await main();
	db.close();
};

run();
