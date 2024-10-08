import React from "react";
import { useFormContext } from "react-hook-form";
import { Stack, TextField } from "@mui/material";

import { Schema } from "../types/schema";
import { RHFAutocomplete } from "../../components/RHFAutocomplete";

const Users: React.FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<Schema>();

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Nombre"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <RHFAutocomplete<Schema>
        name="states"
        label="Estados"
        options={[
          { id: "1", label: "California" },
          { id: "2", label: "Texas" },
        ]}
      />
    </Stack>
  );
};

export default Users;
