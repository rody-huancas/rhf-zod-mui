import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema, schema } from '../types/schema'
import { FormProvider } from 'react-hook-form'

import Users from './Users'

export const UserProvider = () => {
  const methods = useForm<Schema>({ mode: 'all', resolver: zodResolver(schema) })

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  )
}
