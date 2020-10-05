import { Router } from "express";

const basicRoute = Router();
const basicRouter = (req: any, res: any) =>
  res.json({ message: "Basic Router Initiate" });

basicRoute.get("/", basicRouter);
export { basicRoute };
