import React from 'react';
import './index.less';
interface AlertProps {
    style?: object;
    closable?: boolean;
    closeText?: string | HTMLElement;
    message?: string;
    description?: string;
    type?: string;
    onClose?: React.ReactEventHandler<HTMLElement>;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
