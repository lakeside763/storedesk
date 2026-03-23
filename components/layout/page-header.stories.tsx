import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./page-header";

const meta = {
  title: "Layout/PageHeader",
  component: PageHeader,
  tags: ["autodocs"],
  args: {
    title: "Products",
    description: "Manage your product catalog",
  },
} satisfies Meta<typeof PageHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutDescription: Story = {
  args: {
    title: "Dashboard",
    description: undefined,
  },
};