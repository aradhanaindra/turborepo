import type { Meta, StoryObj } from '@storybook/react';
import '@repo/ui/global.css'
import { Button } from '@repo/ui/button';
import "./fonts.css"

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      control: false
    },
    children: {
      control: false
    }
  },
  args: { children: "Button" },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary"
  }
};

export const Destructive: Story = {
  args: {
    variant: "destructive"
  }
}

export const Outline: Story = {
  args: {
    variant: "outline"
  }
}

export const Ghost: Story = {
  args: {
    variant: "ghost"
  }
}


