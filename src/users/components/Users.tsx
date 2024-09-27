import { useForm } from 'react-hook-form'
import { Stack, TextField } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import { Schema, schema } from '../types/schema'

const Users = () => {
  const { register, formState: { errors } } = useForm<Schema>({
    mode: 'all',
    resolver: zodResolver(schema)
  })

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField {...register("name")} label="Nombre" error={!!errors.name} />
      <TextField {...register("email")} label="Email" error={!!errors.email} />
    </Stack>
  )
}

export default Users
