import React from "react";
import Logo from "./Logo";
import DarkModeToggle from "./DarkModeToggle";
import UserButton from "./UserButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import Link from "next/link";
import { MessageSquareIcon } from "lucide-react";
import CreateChatButton from "./CreateChatButton";
import UpgradeBanner from "./UpgradeBanner";
import LanguageSelect from "./LanguageSelect";
import { Button } from "@/components/ui/button";

async function Header() {
  const session = await getServerSession(authOptions);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-900">
      <nav className="flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-900 max-w-7xl mx-auto">
        <Logo />

        <div className="flex-1 sm:pt-0 pt-3 flex items-center justify-end space-x-4">
          <LanguageSelect />

          {session ? (
            <>
              <Link href={"/chat"} prefetch={false}>
                <MessageSquareIcon className="text-black dark:text-white" />
              </Link>

              <CreateChatButton isLarge />
            </>
          ) : (
            <Button variant={"secondary"}>
              <Link href="/pricing">Pricing</Link>
            </Button>
          )}

          <DarkModeToggle />
          <UserButton session={session} />
        </div>
      </nav>

      {/* Upgrade Banner */}
      <UpgradeBanner session={session} />
    </header>
  );
}

export default Header;
