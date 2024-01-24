import express from "express";
import doctorsRouters from "./doctorsRouters.js";

const router = express.Router();

router.use("/doctors", doctorsRouters);

export default router;
