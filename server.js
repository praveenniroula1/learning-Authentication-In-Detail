import "dotenv/config";
import express from "express";
import cors from "cors";

// configuring express to the application
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// dbconfig
import { dbConfig } from "./dbConfig/dbConfig.js";
dbConfig();

// APIS Endpoint are called here
import loginRouter from "./src/routers/loginRouter.js";
app.use("/api/login", loginRouter);

// listeing to the port
const port = 8000;
app.listen(port, () => {
  console.log(`Your app is listening on ${port}`);
});
