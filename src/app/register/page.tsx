import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../../../auth";
import PricingBlob from "../../../components/PricingBlob";
import PricingCards from "../../../components/PricingCards";

async function Register() {
  const session = await getServerSession(authOptions);
  return (
    <div className="isolate flex flex-col items-center h-full overflow-hidden bg-white dark:bg-gray-900 pb-40">
      <div className="mx-auto max-w-7xl px-6 pb-12 pt-16 text-white text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mt-2 pb-10 text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s handle your Membership{" "}
            {session?.user?.name?.split(" ")?.[0]}!
          </p>

          <div className="relative">
            <PricingBlob />
          </div>
        </div>
      </div>
      <PricingCards session={session} redirect={false} />
    </div>
  );
}

export default Register;
