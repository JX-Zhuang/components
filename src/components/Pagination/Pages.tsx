import React, { useMemo } from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../libs/styles';
export interface IPagesProps {
  current: number;
  pages: number;
  onChange(current: number): any;
}
const MAX_LENGTHS = 7;
const RenderCurrent: React.FC<{
  current: number;
  pages: number;
  start?: number;
}> = ({ start = 1, ...props }) => {
  const activeCls = getPrefixCls('pagination-pages-active');
  const pages = useMemo(
    () =>
      Array(props.pages)
        .fill(0)
        .map((item, index) => index + start),
    [start, props.pages]
  );
  return (
    <React.Fragment>
      {pages.map((e, i) => {
        return (
          <li
            key={i}
            className={classNames({
              [activeCls]: e === props.current
            })}
            data-page={e}
          >
            {e}
          </li>
        );
      })}
    </React.Fragment>
  );
};
const Pages: React.FC<IPagesProps> = ({ onChange, ...props }) => {
  const prefixCls = getPrefixCls('pagination-pages');
  const moreClasses = classNames(`${prefixCls}-more`);
  let element = null;
  if (props.pages <= MAX_LENGTHS) {
    element = <RenderCurrent {...props} />;
  } else {
    const lastThird = props.pages - 2;
    if (props.current <= 3) {
      const pages = props.current === 3 ? 4 : 3;
      element = (
        <React.Fragment>
          <RenderCurrent current={props.current} pages={pages} />
          <li className={moreClasses} />
          <li data-page={props.pages}>{props.pages}</li>
        </React.Fragment>
      );
    } else if (props.current >= lastThird) {
      const pages = props.current === lastThird ? 4 : 3;
      const start = props.current === lastThird ? lastThird - 1 : lastThird;
      element = (
        <React.Fragment>
          <li data-page={1}>1</li>
          <li className={moreClasses} />
          <RenderCurrent current={props.current} pages={pages} start={start} />
        </React.Fragment>
      );
    } else {
      element = (
        <React.Fragment>
          <li data-page={1}>1</li>
          <li className={moreClasses} />
          <RenderCurrent
            current={props.current}
            pages={3}
            start={props.current - 1}
          />
          <li className={moreClasses} />
          <li data-page={props.pages}>{props.pages}</li>
        </React.Fragment>
      );
    }
  }
  const onClick = (e: React.MouseEvent<HTMLElement>) => {
    const page = Number((e.target as HTMLElement).dataset.page);
    if (page) {
      onChange(page);
    }
  };
  return (
    <ul onClick={onClick} className={classNames(prefixCls)}>
      {element}
    </ul>
  );
};
export default Pages;
