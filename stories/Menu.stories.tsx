import React, { useState } from 'react';
import Menu from '../src/components/Menu';
export default {
  title: 'Menu',
  component: Menu
};
export const MenuDemo = () => {
  const [current, setCurrent] = useState();
  const menus = [
    {
      key: '1',
      title: '首页'
    },
    {
      key: '2',
      title: '面试实战'
    },
    {
      key: '3',
      title: '视频简历'
    }
  ];
  const onClick = item => setCurrent(item.key);
  return (
    <div>
      <Menu menus={menus} selectedKeys={[current]} onClick={onClick} />
    </div>
  );
};
