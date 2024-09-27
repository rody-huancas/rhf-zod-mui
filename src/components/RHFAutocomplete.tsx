import { Controller } from 'react-hook-form'
import { Autocomplete } from '@mui/material'
import { useFormContext } from 'react-hook-form'

const RHFAutocomplete = ( ) => {
  const { control } = useFormContext()

  return (
    <>
      {/* <Controller
        control={control}
        name={name}
        render={(params) => <Autocomplete />}
      /> */}
    </>
  )
}

export default RHFAutocomplete
