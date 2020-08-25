import mongoose from "mongoose";
import { SiswaSchema } from "../model/siswa.db";
import { typedModel } from "ts-mongoose";

export class Database {
    // private readonly mongo: mongoose.Connection;
    constructor(public readonly url: string) {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => console.log("Database Connected"))
            .catch(console.error);
    }

    public static getModel() {
        return typedModel("Siswa", SiswaSchema, "siswa");
    }
}
