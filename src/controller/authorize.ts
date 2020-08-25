import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";
import { Database } from "../cluster/Database";
import argon2 from "argon2";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        const UserModel = Database.getModel();
        const user = await UserModel.findById(req.body.nim) || { _id: "000000", passwordHash: "none" };
        const isPass = await argon2.verify(user.passwordHash, req.body.password);
        console.log(isPass); // berak
    };

    meta = {
        method: "GET",
        path: "/api/auth"
    };

    name = "Login";
}

