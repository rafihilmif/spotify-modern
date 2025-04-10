import express from "express";
import dotenv from "dotenv";

import adminAccount from "./routes/admin/account.route.js";
import artistAccount from "./routes/artist/account.route.js";
import fansAccount from "./routes/fans/account.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/v1/fans/account", fansAccount);
app.use("/api/v1/artist/account", artistAccount);
app.use("/api/v1/admin/account", adminAccount);


app.listen(PORT, () => {
    console.log("Server is running on port 5000")
})