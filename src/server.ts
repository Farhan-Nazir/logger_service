import express from "express";
import { App } from "./app";
import bodyParser from "body-parser";
//Types
import { AppType } from "types";

const app: AppType = express();
const PORT: number = 5000;

app.use(bodyParser.json());

App(app);

app.set("port", PORT);
app.listen(PORT, () => console.log("Server started at 📡 " + PORT));
