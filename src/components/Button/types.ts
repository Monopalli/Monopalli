import React, {ReactNode} from 'react';

export type ButtonProps = {
    id?: string;
    isDisabled?: boolean;
    variant: 'contained' | 'outlined'
    children: ReactNode;
} & React.HTMLAttributes<HTMLButtonElement>;
