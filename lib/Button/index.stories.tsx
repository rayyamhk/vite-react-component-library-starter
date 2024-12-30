import type { Meta, StoryObj } from "@storybook/react"
import { Button, ButtonProps } from "@/Button"

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered"
	},
	tags: ["autodocs"],
	argTypes: {
		color: {
			options: ["primary", "success", "info", "warning", "error"],
			control: { type: "select" }
		},
		size: {
			options: ["small", "medium", "large"],
			control: { type: "select" }
		},
		variant: {
			options: ["contained", "outlined", "text"],
			control: {
				type: "select"
			}
		}
	}
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

const defaultProps: ButtonProps = {
	text: "Clique me",
	color: "primary",
	size: "medium",
	variant: "contained"
}

export const DefaultButton: Story = {
	args: {
		...defaultProps,
		children: "Click Me!"
	}
};

export const DisabledButton: Story = {
	args: {
		...defaultProps,
		children: "Click Me!",
		disabled: true
	}
}
