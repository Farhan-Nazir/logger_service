import { Request, Response } from "express";
import { LoggerResponse } from "types";

function loggerController(req: Request, res: Response) {
  const date: Date = new Date();
  if (req.body !== undefined) {
    const {
      service,
      endpoint,
      status,
      statusText,
      pathname,
    }: LoggerResponse = req.body;
    return res.json({ service, endpoint, status, statusText, pathname, date });
  }
  return res.json({ message: "No Data received!!!", logging: req.path });
}

export { loggerController };
