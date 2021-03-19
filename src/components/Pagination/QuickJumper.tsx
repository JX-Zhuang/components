import React from 'react';
import classNames from 'classnames';
import { getPrefixCls } from '../../libs/styles';
export interface IQuickJumperProps {
  setPageNumber: (page: number) => any;
}
const QuickJumper: React.FC<IQuickJumperProps> = props => {
  const prefixCls = getPrefixCls('pagination-quick-jumper');
  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const page = e.target ? Number((e.target as any).value) : 1;
    if (e.keyCode === 13) {
      props.setPageNumber(page);
    }
  };
  return (
    <div className={classNames(prefixCls)}>
      <span>前往</span>
      <input onKeyDown={onkeydown} />
      <span>页</span>
    </div>
  );
};
QuickJumper.defaultProps = {
  setPageNumber: () => {}
};
export default QuickJumper;
