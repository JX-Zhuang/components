import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../libs/styles';
export interface ISizeChangerProps {
  pageSize?: number;
  //指定每页可以显示多少条
  pageSizeOptions: number[];
  //pageSize 变化的回调
  onShowPageSizeChange: (size: number) => any;
}
const SizeChanger: React.FC<ISizeChangerProps> = props => {
  const prefixCls = getPrefixCls('pagination-size-changer');
  const [showSizeOptions, setSizeOptions] = useState(false);
  const ref = useRef() as React.MutableRefObject<HTMLUListElement>;
  const toggle = () => setSizeOptions(!showSizeOptions);
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const pageSize = Number((e.target as HTMLElement).dataset.pagesize);
    toggle();
    props.onShowPageSizeChange(pageSize);
  };
  useEffect(() => {
    const event = (e: any) => {
      if (!ref.current) return;
      if (e.target === ref.current || ref.current.contains(e.target)) {
        return;
      }
      setSizeOptions(false);
    };
    document.body.addEventListener('click', event);
    return () => {
      document.body.removeEventListener('click', event);
    };
  }, []);
  return (
    <div className={classNames(prefixCls)}>
      <div
        onClick={toggle}
        className={classNames(`${prefixCls}-page-size-selector`)}
      >
        {props.pageSize} 条/页
      </div>
      {showSizeOptions ? (
        <ul onClick={onClick} ref={ref}>
          {props.pageSizeOptions.map((pageSize, index) => {
            return (
              <li
                key={index}
                data-pagesize={pageSize}
                className={classNames({
                  [`${prefixCls}-active`]: pageSize === props.pageSize
                })}
              >
                {pageSize} 条/页
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};
SizeChanger.defaultProps = {
  onShowPageSizeChange: () => {},
  pageSize: 10
};
export default SizeChanger;
