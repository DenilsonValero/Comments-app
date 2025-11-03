import express from "express";
import{ getUser, register ,login} from "../controllers/userC.js";
import auth from "../middleware/auth.js";

const router = express.Router()

router.get("/",auth,getUser);
router.post("/register",register);
router.post("/login",login,);

export default  router;