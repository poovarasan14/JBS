import { defineMiddleware, sequence } from "astro:middleware";
import { ulidFactory } from "ulid-workers";

export const generateTrace = defineMiddleware(async ({ locals }, next) => {
  try {
    const correlationId = ulidFactory()();
    locals.trace = { correlationId };
  } catch (error) {
    console.error("Error generating correlation ID:", error);
    throw error;
  }
  return await next();
});

export const onRequest = sequence(generateTrace);
