import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        res.render("login", { title: "Login | Node-Siakad", req });
    };

    meta = {
        method: "GET",
        path: "/login"
    };

    name = "Login";
}
