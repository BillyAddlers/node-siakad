import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";
import { Database } from "../cluster/Database";
import argon2 from "argon2";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        const UserModel = Database.getModel();
        let isPass = false;
        const user = await UserModel.findById(req.body.nim);
        if (user) isPass = await argon2.verify(user.passwordHash, req.body.password);
        console.log(req.body.nim + " is " + isPass);
    };

    meta = {
        method: "POST",
        path: "/api/register"
    };

    name = "Register";
}
