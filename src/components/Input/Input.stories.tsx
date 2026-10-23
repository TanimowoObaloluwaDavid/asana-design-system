import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Design System/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Task name",
    helper: "Give your task a clear, descriptive name.",
    placeholder: "Enter task name",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled input",
    helper: "This field cannot be edited.",
    placeholder: "Disabled",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Required field",
    helper: "This field is required.",
    placeholder: "Enter value",
    required: true,
  },
};
