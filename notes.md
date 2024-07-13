Installed
next js (page is server page by default)
-- to render a client component fetch data from server component and render that client component inside it as a child by populating it with that data.
tailwind. we can not use react hooks inside server component.
export page as default export and component as const export

shadcn (we can customise components provided by schadcn)
to add a component(card) npx schadcn-ui@latest add card
cn() is used to group default and dynamic classes

1. zod react-hook-form hookform/resolvers are installed from shadcn form component.
2. useTransition() from react.

**_ Prisma _**
npm i -D prisma
npm i @prisma/client
npx prisma init
create db string in env file
after creating models
npx prisma generate (it will give models suggestion when we write db.)
npx prisma db push (it loads prisma schema in db. database is now in sync with your Prisma schema)
** After making any change in schema run both of these commands to push changes in db **
go to https://authjs.dev/ and select prisma adapter also select models for users from psql
npm install @auth/prisma-adapter

**_ bcrypt _**
npm i bcrypt or bcryptjs (to encrypt the password) bcryptjs is less error prone
npm i -D @types/bcryptjs

**_ nextauth _**
npm install next-auth@beta (any version >5) (auth.ts needs to be created)
-- needs to create AUTH_SECRET in env for providers to create one (npx auth secret) for production
-- middleware needs to be created
-- in routes file see how to write js docs in a file
