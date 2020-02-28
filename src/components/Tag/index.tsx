import React from 'react'
import classNames from 'classnames'
import styles from './index.less'

interface TagProps {
	children?: React.ReactNode;
	themeColor?: string;
	closable?: boolean;
	onClose?: React.ReactEventHandler<HTMLElement>;
	color?: string;
}

const Tag: React.FC<TagProps> = props => {
	let { children, closable, onClose, color } = props;
	let tag = React.createRef<HTMLDivElement>();
	let handleClose = (e: React.MouseEvent<HTMLElement>) => {
		onClose && onClose(e);
		tag.current!.style.display = 'none'
	}
	return <div ref={tag} className={classNames(styles.xTag, color ? styles.xTagHasColor : '')} style={{ backgroundColor: color }}>
		{children}
		{closable && <span className={styles.closeBtn} onClick={handleClose}>x</span>}
	</div>
}

export default Tag

