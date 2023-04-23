import { Router } from "express";
import { getTweets, postTweets } from "../controllers/tweetsControllers.js";

const router = Router();

router.get("/tweets", getTweets);
router.post("/tweets", postTweets);
router.put("/tweets");
router.delete("/tweets");

export default router;
