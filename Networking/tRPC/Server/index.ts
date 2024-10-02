import express from "express";
import { initTRPC } from "@trpc/server";
import {createExpressMiddleware} from '@trpc/server/adapters/express'


const app = express();

const port = process.env.PORT || 3000;

const t=initTRPC.create();
export const router = t.router;
export const publicProcedure = t.procedure;


const appRouter = router({
     greeting: publicProcedure.query(() => 'hello tRPC v10!'),
   });

app.listen(port,()=>{
     console.log(`the port is running sucessfull at ${port}`)   
})

app.use(
  '/trpc',
 createExpressMiddleware({
    router: appRouter,
    
  }),
);

export type AppRouter = typeof appRouter;