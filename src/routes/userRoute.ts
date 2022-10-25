import express from 'express';
import { getUser, createUser, updateUser, deleteUser, getUsers } from '../controllers/user';
const router = express.Router()


router.get("/all", getUsers)
router.get("/:userId", getUser)
router.post("/registeruser", createUser)
router.put("/updateuser/:id", updateUser)
router.delete("/deleteuser/:id", deleteUser)

export default router;