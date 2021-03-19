import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export interface IStep {
  title: string;
  key: string;
  name: string;
}
const defaultProps: { steps: IStep[]; activeKey: string } = {
  steps: [],
  activeKey: ''
};
export type StepsProps = {
  className?: string;
  onClick?(params: {
    item: IStep;
    key: string;
    domEvent: React.MouseEvent<HTMLElement, MouseEvent>;
  }): any;
} & Readonly<typeof defaultProps>;
const Steps = (props: StepsProps) => {
  const { activeKey, className, steps } = props;
  const prefixCls = getPrefixCls('steps');
  const prefixClsItemBox = `${prefixCls}-item-box`;
  const prefixClsItem = `${prefixCls}-item`;
  const prefixClsBall = `${prefixCls}-ball`;
  const prefixClsTitle = `${prefixCls}-title`;
  const prefixClsLine = `${prefixCls}-line`;
  const classes = classNames(prefixCls, className);
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (typeof props.onClick === 'function') {
      const key: string = (e.currentTarget as any).dataset.key;
      const item = steps.find(step => step.key === key) as IStep;
      props.onClick({
        item,
        key,
        domEvent: e
      });
    }
  };
  return (
    <div className={classes}>
      {steps.map((step, index) => (
        <div
          key={step.key}
          className={classNames(prefixClsItemBox, {
            [`${prefixCls}-active`]: activeKey === step.key
          })}
        >
          <div className={classNames(prefixClsItem)}>
            <div
              className={classNames(prefixClsBall)}
              onClick={onClick}
              data-key={step.key}
            >
              <span>{step.name}</span>
            </div>
            <div className={classNames(prefixClsLine)} />
          </div>
          <div className={classNames(prefixClsTitle)}>{step.title}</div>
        </div>
      ))}
    </div>
  );
};
Steps.defaultProps = defaultProps;
export default Steps;
