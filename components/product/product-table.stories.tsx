import type { Meta, StoryObj } from "@storybook/react";
import { ProductTable } from "./product-table";

const meta = {
  title: "Product/ProductTable",
  component: ProductTable,
  tags: ["autodocs"],
} satisfies Meta<typeof ProductTable>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleProducts = [
  {
    id: "1",
    name: "MacBook Pro 14",
    sku: "MBP-14-001",
    price: 1999.99,
    stockQuantity: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    name: "Magic Mouse",
    sku: "MM-002",
    price: 79.99,
    stockQuantity: 3,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export const Default: Story = {
  args: {
    products: sampleProducts,
  },
};

export const SingleRow: Story = {
  args: {
    products: [sampleProducts[0]],
  },
};