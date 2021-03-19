import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
import LoadingIcon from './LoadingIcon';
export type ButtonSize = 'large' | 'small' | 'middle';
export type ButtonShape = 'round' | 'default';
export type ButtonType = 'default' | 'primary' | 'link' | 'text';
export type ButtonHtmlType = 'submit' | 'reset' | 'button';
export interface IButtonProps {
  /** 按钮失效状态  */
  disabled?: boolean;
  /* 设置按钮载入*/
  loading?: boolean;
  /* 设置按钮形状  */
  shape?: ButtonShape;
  /* 设置按钮大小	*/
  size?: ButtonSize;
  /* 设置按钮类型	 */
  type?: ButtonType;
  /* 点击按钮时的回调 */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /* 将按钮宽度调整为其父宽度的选项 */
  block?: boolean;
  /* 设置危险按钮	*/
  danger?: boolean;
  className?: string;
  children?: React.ReactNode;
  htmlType?: ButtonHtmlType;
  [x: string]: any;
}

const Button: React.FC<IButtonProps> = props => {
  const prefixCls = getPrefixCls('btn');
  const {
    className,
    danger,
    size,
    children,
    block,
    type,
    shape,
    loading,
    htmlType,
    ...rest
  } = props;
  let sizeCls: string = '';
  switch (size) {
    case 'large':
      sizeCls = 'lg';
      break;
    case 'small':
      sizeCls = 'sm';
      break;
    default:
      break;
  }
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${type}`]: type,
    [`${prefixCls}-${sizeCls}`]: sizeCls,
    [`${prefixCls}-block`]: block,
    [`${prefixCls}-danger`]: danger,
    [`${prefixCls}-${shape}`]: shape,
    [`${prefixCls}-${loading ? 'loading' : ''}`]: loading
  });
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (props.disabled || props.loading) return;
    if (typeof props.onClick === 'function') props.onClick(e);
  };
  return (
    <button className={classes} {...rest} onClick={onClick} type={htmlType}>
      <LoadingIcon visible={loading} size={size} />
      <span className={classNames(`${prefixCls}-content-text`)}>
        {children}
      </span>
    </button>
  );
};
Button.defaultProps = {
  type: 'default',
  loading: false,
  block: false
};
export default Button;
