import express from "express";
const router = express.Router();

import * as authController from "../controllers/auth";

router.post('/login', authController.login)

router.post('/signup', authController.signup)

router.post('/reset-password', authController.resetPassword)

export default router;