const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const db = require("./config/db");
const taskroutes = require("./routes/taskRoutes");
const PORT = process.env.PORT || 5000;

const app = express();
// const PORT =5000;

app.use(cors());
app.use(bodyparser.json());
app.use("/tasks",taskroutes);

db.sync()
  .then(()=>console.log("database Synced"))
  .catch((err)=>console.error("DB error",err));


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})
