import { z } from "zod";
import { consumoEletroDTO } from "./consumoEletroDTO";

const consumoDTO = z.object({
  date: z.date({
    required_error: "date is required",
    invalid_type_error: "date must be a date",
  }),
  dinheiro: z.number({
    required_error: "dinheiro is required",
    invalid_type_error: "dinheiro must be a number",
  }),
  kwh: z.number({
    required_error: "kwh is required",
    invalid_type_error: "kwh must be a number",
  }),
  consumos: z.array(consumoEletroDTO),
  userId: z.number({
    required_error: "userId is required",
    invalid_type_error: "userId must be a number",
  }),
});

export type consumoDTO = z.infer<typeof consumoDTO>;
