import express from 'express';
import { getUser, createUser, updateUser } from '../controllers/user';
const router = express.Router()


router.get("/:userId", getUser)
router.post("/registeruser", createUser)
router.put("/updateuser/:id", updateUser)

export default router;