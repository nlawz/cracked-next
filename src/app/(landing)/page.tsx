import Link from "next/link";
import Image from "next/image";
import { type Metadata } from "next";
import { PlusIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { CopyToClipboard } from "./_components/copy-to-clipboard";
import {
  LuciaAuth,
  NextjsLight,
  NextjsDark,
} from "./_components/feature-icons";

export const metadata: Metadata = {
  title: "Next.js, tRPC, and Lucia Auth",
  description:
    "A Next.js learning resource to help you understand the structure of modern day web apps and the tradeoffs you make by using saas glue.",
};

const githubUrl = "https://github.com/nlawz/cracked-next";

const HomePage = () => {
  return (
    <>
      <section className="mx-auto grid min-h-[calc(100vh-300px)] max-w-5xl grid-cols-1 gap-8 py-10 text-center lg:grid-cols-2 lg:py-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="p-4">
            <div className="mb-10 flex items-center justify-center gap-3">
              <NextjsIcon className="h-20 w-20" />
              <PlusIcon className="h-8 w-8" />
              <LuciaAuth className="h-20 w-20" />
            </div>
            <h1 className="text-balance text-center text-3xl font-bold sm:text-5xl md:text-6xl lg:text-7xl">
              Next.js, tRPC, Lucia Auth Starter
            </h1>
            <p className="text-balance mb-10 mt-4 text-center text-muted-foreground md:text-lg lg:text-xl">
              A Next.js Authentication starter/learning template (password reset, email validation and
              oAuth). Includes Lucia, Drizzle, tRPC, Stripe, tailwindcss, shadcn and
              react-email.
            </p>
            <div className="mb-10">
              <div className="mx-auto max-w-[430px]">
                <CopyToClipboard text={"git clone " + githubUrl} />
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button size="lg" variant="outline" asChild>
                <a href={githubUrl}>
                  <GitHubLogoIcon className="mr-1 h-5 w-5" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" asChild>
                <Link href="/login">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/land.jpg"
            alt="a wizard"
            className="hidden lg:block rounded-xl shadow-lg"
            height={600}
            width={600}
          />
        </div>
      </section>
    </>
  );
};

export default HomePage;

function NextjsIcon({ className }: { className?: string }) {
  return (
    <>
      <NextjsLight className={className + " dark:hidden"} />
      <NextjsDark className={className + " hidden dark:block"} />
    </>
  );
}
