import { z } from "zod";

const EnderecoDTO = z.object({
  cep: z.string(),
  numero: z.number(),
  uf: z.string(),
  bairro: z.string(),
  logradouro: z.string(),
  localidade: z.string(),
});
export type EnderecoDTO = z.infer<typeof EnderecoDTO>;
