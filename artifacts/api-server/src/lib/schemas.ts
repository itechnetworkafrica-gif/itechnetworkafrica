import { z } from "zod";

/** Inline copy — replaces @workspace/api-zod dependency */
export const HealthCheckResponse = z.object({
  status: z.string(),
});
