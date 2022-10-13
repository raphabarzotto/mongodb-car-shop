import { z } from 'zod';
import { vehicleSchema } from './IVehicle';

export const carSchema = vehicleSchema.extend({
  doorsQty: z.number().int().min(2).max(4),
  seatsQty: z.number().int().min(2).max(7),
});

export type ICar = z.infer<typeof carSchema>;