import express from "express";
import { handleSignup, handleTest } from "../controllers/handleSignup.js";

const router = express.Router()


router.get("/", handleTest)
router.post("/signup", handleSignup)

export default router;
