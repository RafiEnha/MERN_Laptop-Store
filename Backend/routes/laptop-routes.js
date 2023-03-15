const express = require("express");
const router = express.Router();
const Laptop = require("../model/Laptop");
const laptopsController = require("../controllers/laptops-controller");

router.get("/", laptopsController.getAllLaptops);
router.post("/", laptopsController.addLaptop);
router.get("/:id", laptopsController.getById);
router.put("/:id", laptopsController.updateLaptop);
router.delete("/:id", laptopsController.deleteLaptop);

module.exports = router;