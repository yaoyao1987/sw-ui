import React from 'react';
import './index.less';
interface ButtonProps {
    children?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    className?: string;
    type?: string;
    shape?: string;
    block?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
