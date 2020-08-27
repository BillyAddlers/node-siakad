import { Route } from "../cluster/Router";
import { NextFunction, Request, Response } from "express";
import { Database } from "../cluster/Database";
import argon2 from "argon2";

export class Main implements Route {
    executable = async function (req: Request, res: Response, next: NextFunction) {
        const nim = req.session!!.nim
        const UserData = Database.getModel()
        const user = await UserData.findById(nim)
        if (user) {
            res.render("panel_siswa", { title: "Node-Siakad | Panel Admin", nim: nim, name: user.name});
        } else {
            res.redirect("/")
        }
    };

    meta = {
        method: "GET",
        path: "/siswa"
    };

    name = "Panel Siswa";
}
