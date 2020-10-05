import { Router } from "express";
import { basicRoute } from "./basicRouter.route";
import { _hsLogger } from "./components/hsLogger";

const AppRouter = Router();

AppRouter.use("/basic", basicRoute);
AppRouter.use("/track", _hsLogger);

export { AppRouter };
