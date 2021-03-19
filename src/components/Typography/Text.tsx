import React from 'react';
import Typography from './Typography';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export type TextType = 'secondary' | 'default';
export type TextSize = 'middle' | 'small';
export type ITitleProps = {
  className?: string;
  children?: React.ReactNode;
  size?: TextSize;
  type?: TextType;
};
const Title: React.FC<ITitleProps> = props => {
  const { className, type, size, ...rest } = props;
  const prefixCls = getPrefixCls('typography-text');
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-${type}`]: type
  });
  return (
    <Typography component={'div'} {...rest} className={classes}>
      {props.children}
    </Typography>
  );
};
Title.defaultProps = {
  size: 'middle',
  type: 'default'
};
export default Title;
