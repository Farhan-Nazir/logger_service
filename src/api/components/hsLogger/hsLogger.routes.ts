import { Router } from "express";
import { loggerController } from "./logger";

const _hsLogger = Router();
_hsLogger.post("/hsLogger", loggerController);
export { _hsLogger };
