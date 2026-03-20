"use client";

import React from "react"
import { StyledButton } from "./style"

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
}

export const Button = ({onClick, children, variant='primary'}: ButtonProps) => {
    return <StyledButton className={variant} onClick={onClick}>{children}</StyledButton>
}