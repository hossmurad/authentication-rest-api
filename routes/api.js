import express from "express";
const router = express.Router();

import * as  UsersController from "../app/controllers/UsersController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";


router.post("/Registration", UsersController.Registration)
router.post("/Login", UsersController.Login)
router.post("/CodeVerify", UsersController.CodeVerify)
router.post("/EmailVerify/:email", UsersController.EmailVerify)
router.get("/ProfileDetails",AuthMiddleware, UsersController.ProfileDetails)
router.post("/ResetPassword", UsersController.ResetPassword)



export default router;