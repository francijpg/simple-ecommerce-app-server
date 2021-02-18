import express from "express";
import cors from "cors";
import routes from "../routes";

const app = express();

app.set("port", process.env.PORT || 4242);

app.use(cors({ origin: process.env.CLIENT }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

export default app;