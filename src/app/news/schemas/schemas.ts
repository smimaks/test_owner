import { z } from 'zod';

export const allNewsQuery = z
  .object({
    limit: z.number().min(1).max(100),
    offset: z.number().min(0).max(100),
  })
  .required();

export const oneNewsQuery = z
  .object({
    id: z.number().positive(),
  })
  .required();
