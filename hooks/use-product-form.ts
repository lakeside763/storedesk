import { CreateProductInput } from "@/lib/validations/product";
import { useState } from "react";

const initialFormValues: CreateProductInput = {
  name: "",
  sku: "",
  price: 0,
  stockQuantity: 0,
}

type UseProductFormProps = {
  onSubmit: (values: CreateProductInput) => Promise<void>;
}

export function useProductForm({ onSubmit }: UseProductFormProps) {
  const [form, setForm] = useState<CreateProductInput>(initialFormValues);

  const handleChange = (field: keyof CreateProductInput, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  const resetForm = () => {
    setForm(initialFormValues);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSubmit(form);
    resetForm();
  }

  return {
    form,
    handleChange,
    handleSubmit,
    resetForm,
  }
}