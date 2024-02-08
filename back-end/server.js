const express = require("express");
const app = express();
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ extended: false }));
app.use("/api/users", require("./routes/userRoute"));
app.use("/api/products", require("./routes/productRoute"));
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req,res)=>{
    res.send("app is working");
});

app.listen(PORT,()=>{
    console.log(`serve is listing at port ${PORT}`)
});