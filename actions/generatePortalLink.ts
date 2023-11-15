"use server";

import { authOptions } from "../auth";
import { getServerSession } from "next-auth";
import Stripe from "stripe";
import { headers } from "next/headers";
import { adminDb } from "../firebase-admin";
import { redirect } from "next/navigation";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});

export async function generatePortalLink() {
  const session = await getServerSession(authOptions);
  const host = headers().get("host");

  if (!session?.user.id) return console.log("No user ID was found");

  const {
    user: { id },
  } = session;

  const returnUrl =
    process.env.NODE_ENV === "development"
      ? `http://${host}/register`
      : `https://${host}/register`;

  const doc = await adminDb.collection("payments").doc(id).get();

  if (!doc.data) return console.error("No customer record with userId: ", id);

  const customerId = doc.data()!.customer;

  const stripeSession = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: returnUrl,
  });

  redirect(stripeSession.url);
}
