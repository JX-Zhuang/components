import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export interface ITypographyProps {
  component: string;
  children?: React.ReactNode;
  className?: string;
}
const Typography = (props: ITypographyProps) => {
  const { className, component, ...rest } = props;
  const prefixCls = getPrefixCls('typography');
  const classes = classNames(prefixCls, className);
  const Component: any = component;
  return <Component className={classes} {...rest} />;
};
export default Typography;
