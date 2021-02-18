import { Router } from "express";
import payments from "./payments.routes";

const router = Router();

router.use('/api', payments)

export default router;