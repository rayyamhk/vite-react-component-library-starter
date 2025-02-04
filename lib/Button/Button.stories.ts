import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      options: ['primary', 'success', 'info', 'warning', 'error'],
      control: { type: 'select' },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButton: Story = {
  args: {
    color: 'primary',
    size: 'medium',
    children: 'Click Me!',
  },
};

export const DisabledButton: Story = {
  args: {
    ...DefaultButton.args,
    disabled: true,
  },
};
