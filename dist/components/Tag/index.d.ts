import React from 'react';
import './index.less';
interface TagProps {
    children?: React.ReactNode;
    themeColor?: string;
    closable?: boolean;
    onClose?: React.ReactEventHandler<HTMLElement>;
    color?: string;
}
declare const Tag: React.FC<TagProps>;
export default Tag;
