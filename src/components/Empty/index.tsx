import React from 'react';
import classNames from 'classnames';
import './index.less';

interface EmptyProps {
	text?: string;
	className?: string;
}

const Empty: React.FC<EmptyProps> = props => {
	let { text, className } = props;
	return <div className={classNames("emptyWrap", className)}>
		<div className="emptyInner">
			<span className="icon-finder"></span>
			<p>{text ? text : '空空如也'}</p>
		</div>
	</div>
}

export default Empty