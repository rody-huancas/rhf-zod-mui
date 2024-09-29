import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { defaultValues, Schema, schema } from "../types/schema";

import Users from "./Users";

export const UserProvider: React.FC = () => {
  const methods = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
    defaultValues
  });

  return (
    <FormProvider {...methods}>
      <Users />
    </FormProvider>
  );
};