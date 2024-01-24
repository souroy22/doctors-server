import express from "express";
import doctorsController from "../controllers/doctorsControllers.js";

const router = express.Router();

router.get("/", doctorsController.getDoctorsBasedOnCity);

export default router;
