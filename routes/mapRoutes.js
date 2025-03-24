const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { getMapData } = require("../controllers/mapController");

const router = express.Router();

router.get("/", authMiddleware, getMapData);

module.exports = router;
