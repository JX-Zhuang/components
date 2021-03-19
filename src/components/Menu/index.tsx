import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export interface IMenuItem {
  title: string;
  key: string;
}
const defaultProps: { selectedKeys: string[] } = {
  selectedKeys: []
};
export type MenuProps = {
  /* IMenuItem : {title:string , id:string} */
  menus: IMenuItem[];
  className?: string;
  onClick?(params: {
    item: IMenuItem;
    key: string;
    keyPath: string;
    domEvent: React.MouseEvent<HTMLElement, MouseEvent>;
  }): any;
} & Readonly<typeof defaultProps>;
const Menu = (props: MenuProps) => {
  const { selectedKeys, className, menus } = props;
  const prefixCls = getPrefixCls('menu');
  const classes = classNames(prefixCls, className);
  const onClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (typeof props.onClick === 'function') {
      const key: string = (e.target as any).dataset.key;
      const item = menus.find(menu => menu.key === key) as IMenuItem;
      props.onClick({
        item,
        key,
        keyPath: '',
        domEvent: e
      });
    }
  };
  return (
    <div className={classes}>
      {menus.map((menu, index) => (
        <div
          onClick={onClick}
          key={menu.key}
          className={classNames({
            [`${prefixCls}-item`]: true,
            [`${prefixCls}-active`]: selectedKeys.includes(menu.key)
          })}
          data-key={menu.key}
        >
          {menu.title}
        </div>
      ))}
    </div>
  );
};
Menu.defaultProps = defaultProps;
export default Menu;
