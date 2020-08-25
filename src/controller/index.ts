import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        res.render("index", { title: "Node-Siakad", req });
    };

    meta = {
        method: "GET",
        path: "/"
    };

    name = "Home";
}

