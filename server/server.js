const express = require("express");
const app = express();
const connectDb = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT ?? 5000;
const { errorHandler } = require("./middleware/errorMiddleware");

// Connect Database
connectDb();
const cors = require("cors");
app.use(
  cors({
    origin: "https://alf-blogs-fe.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// this allows the controller to get `body.request`
app.use(express.json({ limit: "25mb" }));

// Serve static files from the public directory
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Post Routes:
const postRouter = require("./routers/post");
app.use("/posts", postRouter);

// Use Error Middleware:
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
