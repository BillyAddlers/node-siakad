import { createSchema, Type, typedModel } from "ts-mongoose";

const genders = ["male", "female"] as const;

const AddressSchema = createSchema(
    {
        city: Type.string({ required: true }),
        address_box: Type.string({ required: true })
    }
);

export const SiswaSchema = createSchema(
    {
        _id: Type.number({ required: true }),
        passwordHash: Type.string({ required: true }),
        name: Type.string({ required: true }),
        gender: Type.string({ required: true, enum: genders }),
        address: Type.schema({ required: false }).of(AddressSchema)
    }
);
