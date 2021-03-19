import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
export interface ITooltipProps {
  content?: React.ReactNode | string;
  className?: string;
  show: boolean;
  [x: string]: any;
}
const Pop: React.FC<ITooltipProps> = React.forwardRef((props, ref: any) => {
  const {
    className,
    top,
    left,
    show,
    prefixCls: propsPrefixCls,
    content,
    placement,
    ...rest
  } = props;
  const prefixCls = getPrefixCls('tooltip', propsPrefixCls);
  const style: any = {
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100%'
  };
  return ReactDOM.createPortal(
    <div style={style}>
      <div
        ref={ref}
        className={classNames(prefixCls, className, {
          [`${prefixCls}-hidden`]: !show,
          [`${prefixCls}-${placement}`]: placement
        })}
        {...rest}
      >
        <div className={classNames(`${prefixCls}-content`)}>
          <div className={classNames(`${prefixCls}-arrow`)}>
            <span className={classNames(`${prefixCls}-arrow-content`)} />
          </div>
          <div className={classNames(`${prefixCls}-inner`)} role="tooltip">
            {content}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
});
export default Pop;
