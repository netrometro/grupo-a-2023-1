import { z } from "zod";

const emailDTO = z.object({
  text: z.string({
    required_error: "text is required",
    invalid_type_error: "text must be a string",
  }),
  subject: z.string({
    required_error: "subject is required",
    invalid_type_error: "subject must be a string",
  }),
  from: z.string({
    required_error: "from is required",
    invalid_type_error: "from must be a string",
  }),
  to: z.string({
    required_error: "to is required",
    invalid_type_error: "to must be a string",
  }),
  html: z.string({
    required_error: "html is required",
    invalid_type_error: "html must be a string",
  }),
});

export type emailDTO = z.infer<typeof emailDTO>;
