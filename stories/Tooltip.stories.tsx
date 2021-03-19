import React, { useState } from 'react';
import Tooltip from '../src/components/Tooltip';
import Button from '../src/components/Button';
import './button.scss';

export default {
  title: 'Tooltip',
  component: Tooltip
};
export const Demo = () => (
  <div style={{ padding: '100px' }}>
    <Tooltip title="text text text">
      <Button>测试</Button>
    </Tooltip>
    <Tooltip placement="bottom" title="text text text">
      <Button>测试</Button>
    </Tooltip>
  </div>
);
