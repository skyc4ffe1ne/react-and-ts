import express from "express"
import { login, signup, me, logout } from "../controllers/authControllers.js"

const router = express.Router()

router.post("/login", login)
router.post("/signup", signup)
router.post("/logout", logout)
router.get("/me", me)

export default router;
