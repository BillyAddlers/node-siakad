import { createSchema, Type, typedModel } from "ts-mongoose";
import {TokenSchema} from "./token.db";

const genders = ["male", "female"] as const;
const level = [1, 2, 3] as const;

const AddressSchema = createSchema(
    {
        city: Type.string({ required: true }),
        address_box: Type.string({ required: true })
    }
);

export const UserSchema = createSchema(
    {
        _id: Type.string({ required: true }),
        email: Type.string({ required: false, default: "uwu" }),
        passwordHash: Type.string({ required: true }),
        token: Type.string({ required: true }),
        name: Type.string({ required: true }),
        gender: Type.string({ required: true, enum: genders }),
        level: Type.number({ required: true }),
        address: Type.schema({ required: false }).of(AddressSchema)
    }
);
