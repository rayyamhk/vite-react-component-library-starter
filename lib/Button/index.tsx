import React from "react"
import { Button as MUIButton, ButtonOwnProps } from "@mui/material"

export type ButtonProps = {
    color: ButtonOwnProps["color"]
    size: ButtonOwnProps["size"]
    variant: ButtonOwnProps["variant"]
    text: string
}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <MUIButton
            color={props.color}
            size={props.size}
            variant={props.variant}
        >
            {props.text}
        </MUIButton>
    )
}
