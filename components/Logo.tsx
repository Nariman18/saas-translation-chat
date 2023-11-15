import Link from "next/link";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function Logo() {
  return (
    <Link prefetch={false} href="/" className="overflow-hidden">
      <div className="flex items-center w-[320px] h-14">
        <AspectRatio
          ratio={16 / 9}
          className="flex items-center justify-center"
        >
          <h1 className="dark:text-gray-100 text-gray-900 font-righteous text-3xl">
            Chat With Anyone ✎﹏
          </h1>
        </AspectRatio>
      </div>
    </Link>
  );
}

export default Logo;
