import express from "express"
import userRoutes from "./routes/users.js"
import cors from "cors"
import { db } from "./db.js" 

const app = express()
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(8800)