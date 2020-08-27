import {createSchema, Type} from "ts-mongoose";

export const TokenSchema = createSchema(
    {
        access_token: Type.string(),
        valid: Type.string(),
        valid_until: Type.date({ default: Date.now() })
    }
);
