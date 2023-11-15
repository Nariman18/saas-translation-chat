"use client";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";

function GetStartedButton({ session }: { session: Session | null }) {
  return (
    <div>
      {!session ? (
        <Button
          onClick={() => signIn()}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Started
        </Button>
      ) : (
        <Link
          href="/chat"
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Get Started
        </Link>
      )}
    </div>
  );
}

export default GetStartedButton;
