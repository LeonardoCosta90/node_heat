
import { Router } from "express";
import AuthenticateUserController from "./controllers/authenticate-user-controller";
import { CreateMessageController } from "./controllers/create-message-controller";
import { Get3LastMessagesController } from "./controllers/get-last3-messages-controller";
import { ProfileUserController } from "./controllers/profile-user-controller";
import { ensureAuthenticated } from "./middleware/ensure-authenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);

router.post(
  "/messages",
  ensureAuthenticated,
  new CreateMessageController().handle
);

router.get("/messages/last3", new Get3LastMessagesController().handle);

router.get("/profile", ensureAuthenticated, new ProfileUserController().handle);

export { router };
