import express from "express";
const router = express.Router();

import * as userController from "../controllers/user";

router.get('/get', userController.get)

router.post('/create', userController.create)

router.patch('/update:id', userController.create)

router.delete('/delete', userController.remove)

export default router;