import Stripe from 'stripe';
import { config } from "dotenv";

config();

export const stripe = new Stripe(process.env.STRIPE_PRIVATE_KEY!, { apiVersion: "2020-08-27" })
