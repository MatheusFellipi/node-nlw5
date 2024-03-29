import express from "express";

import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("serve is running 3333"));
