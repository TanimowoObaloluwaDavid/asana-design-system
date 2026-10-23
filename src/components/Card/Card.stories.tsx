import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "raised"],
      description: "default = white bg, raised = surface bg with elevated shadow",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <h3 className="asana-heading mb-2">Project kickoff</h3>
        <p className="asana-body text-text-muted/80">
          Align the team on goals, timeline, and owners before work begins.
        </p>
      </>
    ),
  },
};

export const Raised: Story = {
  args: {
    variant: "raised",
    children: (
      <>
        <h3 className="asana-heading mb-2">Raised card</h3>
        <p className="asana-body text-text-muted/80">
          Surface-colored card with elevated shadow for secondary zones.
        </p>
      </>
    ),
  },
};
