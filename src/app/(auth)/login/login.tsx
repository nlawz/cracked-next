"use client";

import Link from "next/link";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PasswordInput } from "@/components/password-input";
import { DiscordLogoIcon } from "@/components/icons";
import { APP_TITLE } from "@/lib/constants";
import { login } from "@/lib/auth/actions";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "@/components/submit-button";
import Image from "next/image";


export function Login() {
  const [state, formAction] = useFormState(login, null);

  return (
    <Card className="w-full max-w-4xl flex flex-col md:flex-row rounded-2xl">
      <div className="w-full md:w-2/5">
        <CardHeader className="text-center">
          <CardTitle>{APP_TITLE} Log In</CardTitle>
          <CardDescription>Log in to your account to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/login/discord" prefetch={false}>
              <DiscordLogoIcon className="mr-2 h-5 w-5" />
              Log in with Discord
            </Link>
          </Button>
          <div className="my-2 flex items-center">
            <div className="flex-grow border-t border-muted" />
            <div className="mx-2 text-muted-foreground">or</div>
            <div className="flex-grow border-t border-muted" />
          </div>
          <form action={formAction} className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                required
                id="email"
                placeholder="email@example.com"
                autoComplete="email"
                name="email"
                type="email"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <PasswordInput
                id="password"
                name="password"
                required
                autoComplete="current-password"
                placeholder="********"
              />
            </div>

            <div className="flex flex-wrap justify-between">
              <Button variant={"link"} size={"sm"} className="p-0" asChild>
                <Link href={"/signup"}>Not signed up? Sign up now.</Link>
              </Button>
              <Button variant={"link"} size={"sm"} className="p-0" asChild>
                <Link href={"/reset-password"}>Forgot password?</Link>
              </Button>
            </div>

            {state?.fieldError ? (
              <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                {Object.values(state.fieldError).map((err) => (
                  <li className="ml-4" key={err}>
                    {err}
                  </li>
                ))}
              </ul>
            ) : state?.formError ? (
              <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
                {state?.formError}
              </p>
            ) : null}
            <SubmitButton className="w-full" aria-label="submit-btn">
              Log In
            </SubmitButton>
            <Button variant="outline" className="w-full" asChild>
              <Link href="/">Cancel</Link>
            </Button>
          </form>
        </CardContent>
      </div>
      <div className="hidden md:flex w-full md:w-3/5 items-center justify-center">
        <Image
          src="/login.jpg"
          alt="Login illustration"
          className="object-cover w-full h-full rounded-2xl"
          height={600}
          width={600}
        />
      </div>
    </Card>
  );
}
