import express from "express"
import { getInitialSongs } from "../controllers/questionControllers.js"

const router = express.Router()

router.get("/", getInitialSongs)

export default router;
