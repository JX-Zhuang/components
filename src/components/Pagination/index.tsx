import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
import SizeChanger from './SizeChanger';
import QuickJumper from './QuickJumper';
import Pages from './Pages';
const defaultProps = {
  // defaultCurrent: 1,
  // defaultPageSize: 10,
  /** 当前页数 */

  current: 1,
  pageSize: 10,
  total: 0,
  /** 指定每页可以显示多少条 */
  pageSizeOptions: [10, 20, 50, 100],
  showSizeChanger: false,
  showQuickJumper: true,
  onChange: (page: number, pageSize: number) => {},
  onShowPageSizeChange: (current: number, size: number) => {}
};
export type PaginationProps = {
  /* 页码改变的回调，参数是改变后的页码及每页条数 */
  onChange?: (page: number, pageSize: number) => any;
  /* pageSize 变化的回调 */
  onShowPageSizeChange?: (current: number, size: number) => any;
  className?: string;
} & Partial<typeof defaultProps>;
const Pagination: React.FC<PaginationProps> = props => {
  const { className } = props;
  const prefixCls = getPrefixCls('pagination');
  const classes = classNames(prefixCls, className);
  const [pageSize, setPageSize] = useState(
    props.pageSize || defaultProps.pageSize
  );
  const [current, setCurrent] = useState(props.current || defaultProps.current);
  const pages = useMemo(() => {
    if (!props.total) return 0;
    return Math.ceil(props.total / pageSize);
  }, [props.total, pageSize]);
  const setPageNumber = useCallback(
    (pageNumber: number) => {
      //校验pageNumber的合法性
      if (pageNumber % 1 !== 0) return;
      let currentPageNumber = pageNumber;
      if (pageNumber < 1) {
        currentPageNumber = 1;
      } else if (pageNumber > pages) {
        currentPageNumber = pages;
      }
      setCurrent(currentPageNumber);
      props.onChange && props.onChange(currentPageNumber, pageSize);
    },
    [pageSize, props.onChange, pages]
  );
  const setPrevPgae = () => setPageNumber(current - 1);
  const setNextPage = () => setPageNumber(current + 1);
  const onShowPageSizeChange = useCallback(
    (pageSize: number) => {
      setPageSize(pageSize);
      setCurrent(1);
      props.onChange && props.onChange(1, pageSize);
      props.onShowPageSizeChange && props.onShowPageSizeChange(1, pageSize);
    },
    [current, props.onShowPageSizeChange, props.onChange]
  );
  useEffect(() => {
    setPageSize(props.pageSize || 10);
    setCurrent(props.current || 1);
  }, [props.pageSize, props.current]);
  if (pages === 0) return null;
  return (
    <div className={classes}>
      {current !== 1 ? (
        <span
          onClick={setPrevPgae}
          className={classNames(`${prefixCls}-prev-page`)}
        >
          {'<'}
        </span>
      ) : null}
      <Pages current={current} pages={pages} onChange={setPageNumber} />
      {current !== pages ? (
        <span
          onClick={setNextPage}
          className={classNames(`${prefixCls}-next-page`)}
        >
          &gt;
        </span>
      ) : null}
      {props.showSizeChanger ? (
        <SizeChanger
          pageSize={pageSize}
          onShowPageSizeChange={onShowPageSizeChange}
          pageSizeOptions={props.pageSizeOptions || []}
        />
      ) : null}
      {props.showQuickJumper ? (
        <QuickJumper setPageNumber={setPageNumber} />
      ) : null}
    </div>
  );
};
Pagination.defaultProps = defaultProps;
export default Pagination;
