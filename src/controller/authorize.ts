import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";
import { Database } from "../cluster/Database";
import util from "util"
import argon2 from "argon2";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        const UserModel = Database.getModel();
        const data = util.inspect(req.body)
        console.log("Body is " + data);
        let isPass = false;
        const user = await UserModel.findById(req.body.nim);
        if (user) {
            isPass = await argon2.verify(user.passwordHash, req.body.password);
            req.session!!.nim = req.body.nim

            switch (user.level) {
                case 1: {
                    res.redirect("/siswa");
                    break;
                }

                case 2: {
                    res.redirect("/admin");
                    break;
                }

                case 3: {
                    res.redirect("/admin");
                    break;
                }

                default: {
                    res.redirect("/");
                    break;
                }
            }
        } else {
            res.redirect("/");
            console.log(`Account with nim ${req.body.nim} not found`);
        }
        console.log(`${req.body.nim} is ${isPass}`);
    };

    meta = {
        method: "POST",
        path: "/api/auth"
    };

    name = "Login";
}
