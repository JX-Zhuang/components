import React, { useState } from 'react';
import Steps from '../src/components/Steps';
export default {
  title: 'Steps',
  component: Steps
};
export const StepsDemo = () => {
  const steps = [
    {
      key: '1',
      title: '第一步',
      name: '1'
    },
    {
      key: '2',
      title: '第2步',
      name: '2'
    },
    {
      key: '3',
      title: '第3步',
      name: '3'
    }
  ];
  const [activeKey, setActiveKey] = useState('');
  const onClick = item => setActiveKey(item.key);
  return (
    <div style={{ background: 'rgba(179,183,248,1)' }}>
      <Steps steps={steps} onClick={onClick} activeKey={activeKey} />
      <Steps steps={steps} activeKey="1" />
      <Steps steps={steps} activeKey="2" />
      <Steps steps={steps} activeKey="3" />
    </div>
  );
};
