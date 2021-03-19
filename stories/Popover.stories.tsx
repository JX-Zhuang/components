import React, { useState } from 'react';
import Popover from '../src/components/Popover';
import Button from '../src/components/Button';
import './button.scss';

export default {
  title: 'Popover',
  component: Popover
};
export const Demo = () => (
  <div style={{ padding: '100px' }}>
    <Popover title="text text text" content={<div>popover</div>}>
      <Button>测试</Button>
    </Popover>
    <Popover
      title="text text text"
      placement="bottom"
      content={<div>popover</div>}
    >
      <Button>测试</Button>
    </Popover>
  </div>
);
