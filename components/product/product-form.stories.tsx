import type { Meta, StoryObj } from "@storybook/react";
import { ProductForm } from "./product-form";

const meta = {
  title: "Product/ProductForm",
  component: ProductForm,
  tags: ["autodocs"],
  args: {
    isSubmitting: false,
    onSubmit: async () => {},
  },
} satisfies Meta<typeof ProductForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Submitting: Story = {
  args: {
    isSubmitting: true,
  },
};