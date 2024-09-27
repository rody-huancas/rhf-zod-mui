import { z } from 'zod'
import { patterns } from '../../constants'

export const schema = z.object({
  name: z.string().min(1, { message: 'Requerido' }),
  email: z
    .string()
    .min(1, { message: 'Email es requerido' })
    .refine((text) => patterns.email.test(text), {
      message: 'Email no válido',
    }),
});

export type Schema = z.infer<typeof schema>
