import express from "express";
import { signup, signin } from "../Controllers/user.controller.js";
import { validate } from "../Middleware/validation.js";
import { signupSchema, signinSchema } from "../Validation/user.validation.js";

const router = express.Router();

router.post("/signup", validate(signupSchema), signup);
router.post("/signin", validate(signinSchema), signin);

export default router;
