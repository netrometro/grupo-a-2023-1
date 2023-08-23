import { z } from "zod";

const EletroDTO = z.object({
  nome: z.string({
    required_error: "Nome is required",
    invalid_type_error: "Nome must be a string",
  }),
  kwh: z.number({
    required_error: "kwh is required",
    invalid_type_error: "kwh must be a string",
  }),
  userId: z.number({
    required_error: "userId is required",
    invalid_type_error: "userId must be a number",
  }),
});

export type EletroType = z.infer<typeof EletroDTO>;
