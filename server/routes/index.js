const { Router } = require("express");
const controllers = require("../controllers/index.js");

const router = Router();

router.get("/", async (req, res) => res.send(
    "Routing Main Directory"
    )
);

router.get("/carBrands", controllers.getBrandsData);
router.get("/carBrands/:id", controllers.getBrandById);
router.patch("/carBrands/:id", controllers.updateBrand);
router.post("/carBrands", controllers.createNewBrand);
router.delete("/carBrands/:id", controllers.deleteBrand);

module.exports = router;
