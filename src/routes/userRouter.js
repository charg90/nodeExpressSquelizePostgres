import { Router } from "express";
import {
  deleteUser,
  getUsers,
  postUser,
  updateUser,
  getUserTweets,
} from "../controllers/userController.js";
const router = Router();

router.get("/user", getUsers);
router.post("/user", postUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/:id");
router.get("/user/:id/tweets", getUserTweets);
export default router;
