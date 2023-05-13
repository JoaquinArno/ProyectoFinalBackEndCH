import passport from "passport";
import upload from '../lib/multer.js';
import { authController } from "../controllers/index.js";
import { Router } from 'express';


const router = Router()

router.route('/').get(authController.getLogin).post(passport.authenticate("login", { failureRedirect: "/fail-login" }), authController.getLogin);

router.route("/register").get(authController.getRegister).post(upload.single("photo"), passport.authenticate("register", { failureRedirect: "/fail-register" }), authController.getLoginMail,);

router.get("/fail-login", authController.getLoginFailiure);

router.get("/fail-register", authController.getRegisterFailiure);

router.get("/logout", authController.logOut);


export const registerLoginRouter = router;