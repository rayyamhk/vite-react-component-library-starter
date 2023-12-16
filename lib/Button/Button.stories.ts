import type { Meta, StoryObj } from '@storybook/react';

import { Button, type ButtonProps } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
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

type Story = StoryObj<typeof meta>;

const defaultProps: ButtonProps = {
  color: 'primary',
  size: 'medium',
};

export const DefaultButton: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
  },
};

export const DisabledButton: Story = {
  args: {
    ...defaultProps,
    children: 'Click Me!',
    disabled: true,
  },
};
