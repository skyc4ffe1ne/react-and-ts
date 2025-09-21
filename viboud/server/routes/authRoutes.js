import express from "express";
import { handleSignup } from "../controllers/handleSignup.js";
import { handleLogin } from "../controllers/handleLogin.js";

const router = express.Router()


router.post("/signup", handleSignup)
router.post("/login", handleLogin)

export default router;
