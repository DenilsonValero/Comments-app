const express = require("express")
const router = express.Router();
const { getUser, register ,login} = require("../controllers/userC.js");
const auth = require("../middleware/auth.js");


router.get("/", auth,getUser);
router.post("/register",register);
router.post("/login",login);

module.exports = router;