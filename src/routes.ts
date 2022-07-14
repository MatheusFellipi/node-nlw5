import { Router } from "express";
import { MessageControllers } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersController";

const routes = Router();
const settingsController = new SettingsController();
const usersController = new UsersController();
const messageControllers = new MessageControllers();

routes.post("/settings", settingsController.create);

routes.post("/users", usersController.create);

routes.post("/messages", messageControllers.create);
routes.get("/messages/:id", messageControllers.showByUser);

export { routes };
