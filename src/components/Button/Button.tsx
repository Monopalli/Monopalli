import * as React from 'react';
import {Button as MuiButton, styled} from '@mui/material';
import {forwardRef} from "react";
import {ButtonProps} from "./types";


const StyledButton = styled(MuiButton)`
`;


const Button = forwardRef<HTMLButtonElement, ButtonProps>((
    {
        variant = "contained",
        children,
        ...props
    }, ref) => {
        return(
            <StyledButton variant={variant}>{children}</StyledButton>
        )
    }
)

export default Button;