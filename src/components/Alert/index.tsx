import React, { useState } from 'react';
import classNames from 'classnames'
import styles from './index.less'

type EventType =
	| React.KeyboardEvent<HTMLDivElement>
	| React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

interface AlertProps {
	style?: object;
	closable?: boolean;
	closeText?: string | HTMLElement;
	message?: string;
	description?: string;
	type?: string;
	onClose?: React.ReactEventHandler<HTMLElement>;
}

const Alert: React.FC<AlertProps> = props => {
	const { style, closable, closeText, message, description, type, onClose } = props;
	const [visible, setVisible] = useState(true)

	const handleClose = (e: React.MouseEvent<HTMLElement>) => {
		setVisible(false);
		onClose && onClose(e)
	}

	return visible ? <div className={classNames(styles.xAlertWrap, styles[type] || styles.warning)} style={{ opacity: visible ? '1' : '0', ...style }}>
		<div className={styles.alertMes}>{message}</div>
		<div className={styles.alertDesc}>{description}</div>
		{!!closable && <span className={styles.closeBtn} onClick={handleClose}>{closeText ? closeText : 'x'}</span>}
	</div > : null;
}

export default Alert