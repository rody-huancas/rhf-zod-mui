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
  states: z.array(z.string()).min(1).max(2)
});

export type Schema = z.infer<typeof schema>

export const defaultValues:Schema = {
  email : "",
  name  : "",
  states: []
}