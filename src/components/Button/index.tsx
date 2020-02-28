import React from 'react'
import classNames from 'classnames'
import './index.less';

interface ButtonProps {
	children?: React.ReactNode;
	onClick?: React.MouseEventHandler<HTMLElement>;
	className?: string;
	type?: string;
	shape?: string;
	block?: boolean
}

const Button: React.FC<ButtonProps> = (props) => {
	let { children, onClick, className, type, shape, block } = props
	return (
		<div
			className={classNames('xButton', 'ripple', type, shape, block ? 'block' : '', className)}
			onClick={onClick}
		>
			{children}
		</div>
	)
}
export default Button;
