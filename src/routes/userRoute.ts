import express from 'express';
import { getUser, createUser, updateUser, deleteUser } from '../controllers/user';
const router = express.Router()


router.get("/:userId", getUser)
router.post("/registeruser", createUser)
router.put("/updateuser/:id", updateUser)
router.delete("/deleteuser/:id", deleteUser)

export default router;