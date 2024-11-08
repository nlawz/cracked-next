
# Next.js Starter with Postgres, Lucia, and tRPC

This is more of a learning resource as opposed to a production ready boilerplate. This served as an awesome tool to understand some of the tradeoffs that are being made with the modern day web stack that alot of us use. Although this app works great, I would probably opt for a simpler approach in the future. Using Next and Supabase, you can more or less achieve this same exact thing much simpler.


## Tech Stack

- [Next.js](https://nextjs.org)
- [Lucia](https://lucia-auth.com/)
- [tRPC](https://trpc.io)
- [Drizzle ORM](https://orm.drizzle.team/)
- [pgSQL](https://www.postgresql.org/)
- [Stripe](https://stripe.com/)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com/)
- [React Email](https://react.email/)
- [Playwright](https://playwright.dev/)

## Get Started

1. Clone this repository to your local machine.
2. cp `.env.example` to `.env` and fill in the required environment variables.
3. [Railway](https://railway.com) let's you easily setup a postgres database for free.
4. Run `pnpm install` to install dependencies.
5. Update app title, database prefix, and other parameters in the `src/lib/constants.ts` file.
6. Run `pnpm db:push` to push your schema to the database.
7. Execute `pnpm dev` to start the development server and enjoy!

## Testing

1. Install [Playwright](https://playwright.dev/) (use this command if you want to install chromium only `pnpm exec playwright install chromium --with-deps`)
2. Build production files using `pnpm build`
3. Run `pnpm test:e2e` (add --debug flag to open tests in browser in debug mode)



