import React from 'react';
import Spin from '../src/components/Spin';
export default {
  title: 'Spin',
  component: Spin
};
export const Theme = () => {
  return (
    <>
      <Spin theme="dark" />
      <div style={{ background: 'red' }}>
        <Spin theme="light" />
      </div>
    </>
  );
};
export const Size = () => {
  return (
    <>
      <Spin size="large" />
      <Spin size="small" />
      <Spin />
    </>
  );
};
