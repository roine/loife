import Router from "koa-router";

import { recipesRoutes } from "./recipes-route";

export const router: Router = new Router();
const api: Router = new Router();

api.use(recipesRoutes);

router.use("/api", api.routes());
