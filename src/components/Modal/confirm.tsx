import React from 'react';
import ReactDOM from 'react-dom';
import ConfirmModal from './ConfirmModal';
export interface IConfirmProps {
  content?: string;
  onOk?: () => any;
  onCancel?: () => any;
  okText?: string;
  cancelText?: string;
}

const confirm = (props: IConfirmProps) => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const unmount = () => {
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  };
  ReactDOM.render(<ConfirmModal {...props} unmount={unmount} />, div);
};
export default confirm;
