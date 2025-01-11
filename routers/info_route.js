const express = require("express");
const { getcurrent } = require("../controllers/weather");

const router = express();

router.get("/current", getcurrent);

module.exports = router;
