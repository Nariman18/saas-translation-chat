import Image from "next/image";
import BlobTop from "../../components/BlobTop";
import Link from "next/link";
import BlobBottom from "../../components/BlobBottom";
import GetStartedButton from "../../components/GetStartedButton";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <BlobTop />

      <div className="py-12 sm:py-20 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Chat with Anyone, anywhere!
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              You speak your language, they speak their language.{" "}
              <span className="text-indigo-600 dark:text-indigo-500">
                Let AI handle the translation.
              </span>
            </p>

            <div className="mt-10 flex items-center justify-center space-x-6">
              <GetStartedButton session={session} />
              <Link
                href="/pricing"
                className="text-sm font-semibold leading-6 text-gray-900 dark:text-gray-300"
              >
                View Pricing <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 right-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                unoptimized
                src="/ChatGifWeb.gif"
                alt="App Screenshot"
                width={2432}
                height={1442}
                className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
              />
            </div>
          </div>
        </div>
        <BlobBottom />
      </div>
    </main>
  );
}
