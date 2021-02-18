import { Router } from "express";
import { payments } from "../controllers";
import services from "../services";

const router = Router();
const CLIENT_DOMAIN = process.env.CLIENT_DOMAIN!

const paymentHandler = payments(services, CLIENT_DOMAIN)

router.post("/create-checkout-session", paymentHandler.createPayment);

export default router;
