import React from 'react';
import { IButtonProps } from '../Button';
import { getPrefixCls } from '../../libs/styles';
import Button from '../Button';
import classNames from 'classnames';
export interface IModalProps {
  /** 对话框是否可见 */
  visible?: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 确认按钮文字 */
  okText?: React.ReactNode;
  /** 取消按钮文字 */
  cancelText?: React.ReactNode;
  /** 标题 */
  title?: React.ReactNode | string;
  /** 点击确定回调 */
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层的回调 */
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  /** 底部内容 */
  footer?: React.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  okButtonProps?: IButtonProps;
  cancelButtonProps?: IButtonProps;
  className?: string;
}
const Modal: React.FC<IModalProps> = props => {
  const {
    className,
    title,
    children,
    footer,
    okButtonProps,
    okText,
    cancelButtonProps,
    cancelText,
    visible,
    closable,
    confirmLoading,
    maskClosable
  } = props;
  const prefixCls = getPrefixCls('modal');
  const maskCls = `${prefixCls}-mask`;
  const titleCls = `${prefixCls}-title`;
  const contentCls = `${prefixCls}-content`;
  const footerCls = `${prefixCls}-footer`;
  const cancelCls = `${prefixCls}-close-btn`;
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-show`]: visible
  });
  const onCancel = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    if (props.onCancel) {
      props.onCancel(e);
    }
  };
  const onOk = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    if (props.onOk) {
      props.onOk(e);
    }
  };
  const renderFooter = () => {
    if (footer) return footer;
    return (
      <div className={footerCls}>
        <Button
          onClick={onCancel}
          size="large"
          shape="round"
          {...cancelButtonProps}
        >
          {cancelText ? cancelText : '取 消'}
        </Button>
        <Button
          loading={confirmLoading}
          onClick={onOk}
          size="large"
          shape="round"
          type="primary"
          {...okButtonProps}
        >
          {okText ? okText : '确 定'}
        </Button>
      </div>
    );
  };
  const onClickMask = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target !== e.currentTarget) return;
    if (maskClosable !== false) {
      props.onCancel && props.onCancel(e);
    }
  };
  return (
    <div
      className={classNames(maskCls, {
        [`${maskCls}-show`]: visible
      })}
      onClick={onClickMask}
    >
      <div className={classes}>
        {closable ? <div className={cancelCls} onClick={onCancel} /> : null}
        {title ? <div className={titleCls}>{title}</div> : null}
        {children ? <div className={contentCls}>{children}</div> : null}
        {renderFooter()}
      </div>
    </div>
  );
};
Modal.defaultProps = {
  closable: true
};
export default Modal;
