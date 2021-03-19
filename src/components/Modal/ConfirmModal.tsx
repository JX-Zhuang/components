import React, { useState } from 'react';
import Modal from './Modal';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export interface IConfirmModal {
  content?: string;
  onOk?: () => any;
  onCancel?: () => any;
  okText?: string;
  cancelText?: string;
  unmount: () => any;
}

const ConfirmModal: React.FC<IConfirmModal> = props => {
  const { okText, cancelText, content } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);
  const onCancel = () => {
    props.unmount();
    if (props.onCancel) {
      props.onCancel();
    }
  };
  const onOk = async () => {
    if (typeof props.onOk !== 'function') return;
    const result = props.onOk();
    if (!result || !result.then) {
      props.unmount();
      return;
    }
    setConfirmLoading(true);
    result.then(
      () => {
        props.unmount();
      },
      (e: Error) => {
        console.log(e);
        setConfirmLoading(false);
      }
    );
  };
  const prefixCls = getPrefixCls('modal-confirm');
  const classes = classNames(prefixCls);
  return (
    <Modal
      className={classes}
      okText={okText}
      visible={true}
      cancelText={cancelText}
      onOk={onOk}
      onCancel={onCancel}
      confirmLoading={confirmLoading}
      maskClosable={false}
    >
      <div className={`${prefixCls}-content`}>{content}</div>
    </Modal>
  );
};
export default ConfirmModal;
