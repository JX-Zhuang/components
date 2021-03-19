import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
import Tooltip, { ITooltipProps } from '../Tooltip';
export interface IPopoverProps extends ITooltipProps {}
const Popover: React.FC<IPopoverProps> = React.forwardRef((props, ref: any) => {
  const { title, className, content, ...rest } = props;
  const prefixCls = getPrefixCls('popover');
  return (
    <Tooltip
      className={className}
      prefixCls={prefixCls}
      {...rest}
      content={
        <div className={classNames(`${prefixCls}-content`)}>
          <div className={classNames(`${prefixCls}-inner`)} role="popover">
            {title ? (
              <div className={classNames(`${prefixCls}-inner-title`)}>
                {title}
              </div>
            ) : null}
            <div className={classNames(`${prefixCls}-inner-content`)}>
              {content}
            </div>
          </div>
        </div>
      }
    />
  );
});
export default Popover;
