import {z} from "zod";

const userDTO = z.object({
    email: z.string({
        required_error: "email is required",
        invalid_type_error: "email must be a string"
    }).email(),
    name: z.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string"
    }),
    password: z.string({
        required_error: "password is required",
        invalid_type_error: "password must be a string"
    }),
    endereco: z.string({})
});

export type userDTO = z.infer<typeof userDTO>;

