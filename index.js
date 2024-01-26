import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import connectDB from "./config/database.js";
import mainRouter from "./app/routers/index.js";
import doctorsController from "./app/controllers/doctorsControllers.js";
// import serverless from "serverless-http";

const app = express();
const router = express.Router();

if (process.env.NODE_ENV?.trim() === "production") {
  dotenv.config({ path: ".env.production" });
} else if (process.env.NODE_ENV?.trim() === "development") {
  dotenv.config({ path: ".env.development" });
}

const PORT = process.env.PORT || 5000;

// connect to DATABASE
// connectDB();

// Define a whitelist of allowed origins
const whitelist = ["http://localhost:5173", "https://flex-health.netlify.app"];

// Configure CORS options
const corsOptions = {
  origin: function (origin, callback) {
    // Check if the origin is in the whitelist or if it's a local request
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

// Use the CORS middleware with the specified options
app.use(cors(corsOptions));

router.get("/", (req, res) => {
  return res.status(200).json({ msg: "Success" });
});

router.get("/api/v1/doctors", doctorsController.getDoctorsBasedOnCity);

app.listen(PORT, (error) => {
  if (error) {
    console.log(`Error while server down, ERROR: ${error.message}`);
    return;
  }
  console.log(`Server is running on PORT: ${PORT}`);
});

// app.use("/.netlify/functions/api", router);
// module.exports.handler = serverless(app);
