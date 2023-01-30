import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUsersController,
  profileUserController,
  updateUserController,
} from "../controllers/user.controllers";

import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";
import verifyAuthenticationMiddleware from "../middlewares/verifyAuthentication.middleware";
import verifyEmailExistMiddleware from "../middlewares/verifyEmailExist.middleware";

const router = Router();

router.post("", verifyEmailExistMiddleware, createUserController);
router.get(
  "",
  verifyAuthenticationMiddleware,
  verifyAdmMiddleware,
  listUsersController
);
router.get("/profile", verifyAuthenticationMiddleware, profileUserController);
router.patch(
  "/:uuid",
  verifyAuthenticationMiddleware,
  verifyAdmMiddleware,
  updateUserController
);
router.delete(
  "/:uuid",
  verifyAuthenticationMiddleware,
  verifyAdmMiddleware,
  deleteUserController
);
router.get("/profile", verifyAuthenticationMiddleware, profileUserController);

export default router;
