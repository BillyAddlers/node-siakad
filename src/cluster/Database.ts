import mongoose from "mongoose";
import { UserSchema } from "../model/user.db";
import { typedModel } from "ts-mongoose";

export class Database {
    constructor(public readonly url: string) {
        mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
            .then(() => console.log("Database Connected"))
            .catch(console.error);
    }

    public static getModel() {
        return typedModel("User", UserSchema, "user");
    }

    private initAdmin() {
        const model = Database.getModel()
        const data = new model({
            _id: "000001",
            passwordHash: "$argon2i$v=19$m=4096,t=3,p=1$+RQ4l0VxTkjVP7rbiyNWew$7nkeSWn3ceEboZGlWgZECBUfm3fEr3KgPlx3HZ1Sr5Q", //bismillah
            name: "root",
            token: "lmaoaokwoawkoawk",
            gender: "male",
            level: 3
        })

        data.save().then(console.log)
    }
}
