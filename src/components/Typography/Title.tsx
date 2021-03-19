import React from 'react';
import Typography from './Typography';
export type TitleLevel = 1 | 2 | 3 | 4;
const defaultProps = {
  level: 1
};
export type TitleProps = {
  className?: string;
  children?: React.ReactNode;
} & Readonly<typeof defaultProps>;
const Title = (props: TitleProps) => {
  const { level, ...rest } = props;
  const component: any = `h${level}`;
  return (
    <Typography component={component} {...rest}>
      {props.children}
    </Typography>
  );
};
Title.defaultProps = defaultProps;
export default Title;
