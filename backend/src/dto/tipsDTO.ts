import { z } from "zod";

const tipsDTO = z.object({
  title: z.string({
    required_error: "title is required",
    invalid_type_error: "title must be a string",
  }),
  description: z.string({
    required_error: "description is required",
    invalid_type_error: "description must be a string",
  }),
});

export type tipsDTO = z.infer<typeof tipsDTO>;
