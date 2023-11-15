import React from "react";
import PricingCards from "../../../components/PricingCards";
import PricingBlob from "../../../components/PricingBlob";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth";

async function PricingPage() {
  const session = await getServerSession(authOptions);
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-lg font-semibold leading-7 text-indigo-400">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" /> whoever you are
          </p>
        </div>

        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            We are 99% sure we have a plan to match 100% of your needs
          </p>

          <PricingBlob />
        </div>
      </div>

      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <PricingCards redirect={true} session={session} />
        </div>
      </div>
    </div>
  );
}

export default PricingPage;
