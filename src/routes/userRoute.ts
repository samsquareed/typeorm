import express from 'express';
import { getUser, createUser } from '../controllers/user';
const router = express.Router()


router.get("/:userId", getUser)
router.post("/registeruser", createUser)


export default router;