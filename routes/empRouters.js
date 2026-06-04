import express, { application } from "express";
import getEmpData from "../controllers/employeeController.js";

const router = express.Router();

router.get('/empData', getEmpData);

export default router;