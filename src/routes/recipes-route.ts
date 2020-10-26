import Router from "koa-router";
import { recipesController } from "../controllers/recipes-controller";

const router: Router = new Router();

router.get("/recipes", recipesController.getAll);
router.post("/recipes", () => {});

router.get("/recipes/:slug", () => {});
router.put("/recipes/:slug", () => {});
router.del("/recipes/:slug", () => {});

export const recipesRoutes: Router.IMiddleware = router.routes();
