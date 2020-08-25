import { Request, Response, NextFunction, Router, RequestHandler } from "express";
import { readdirSync } from "fs";
import * as path from "path";

const method = "get";
const Epath = "/path";

const router = Router();
readdirSync(path.join(__dirname, "..", "controller")).forEach((fileName: string) => {
    const route: Route = new (require(path.join(__dirname, "..", "controller", fileName)).Main)();
    switch (route.meta.method) {
        case "GET": { router.get(route.meta.path, route.executable); break; }
        case "POST": { router.post(route.meta.path, route.executable); break; }
        default: { router.get(route.meta.path, route.executable); }
    }
});

router[method](Epath, (req: Request, res: Response, next: NextFunction) => {
    res.render("index", { title: "This is a sample of handling index" });
});

export interface Route {
    name: string;
    meta: RouteMeta;
    executable: RequestHandler;
}
export interface RouteMeta {
    method: any;
    path: string;
}

export const RouterHandler = router;
