import { z } from "zod";

const consumoEletroDTO = z.object({
  eletroId: z.number({
    required_error: "eletroId is required",
    invalid_type_error: "eletroId must be a number",
  }),
  dinheiro: z.number({
    required_error: "dinheiro is required",
    invalid_type_error: "dinheiro must be a number",
  }),
  kwh: z.number({
    required_error: "kwh is required",
    invalid_type_error: "kwh must be a number",
  }),
});

export type consumoEletroDTO = z.infer<typeof consumoEletroDTO>;
