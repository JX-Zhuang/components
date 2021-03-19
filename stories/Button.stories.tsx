import React, { useState } from 'react';
import './button.scss';
import Button from '../src/components/Button';

export default {
  title: 'Button',
  component: Button
};

export const Type = () => {
  const [loading, setLoading] = useState(false);
  const test = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };
  return (
    <>
      <div>
        <span className="ss">sss</span>
        <Button>Default</Button>
      </div>
      <div>
        <Button type="primary">Primary</Button>
      </div>
      <div>
        <Button type="link">Link</Button>
      </div>
      <div>
        <Button loading>Default</Button>
      </div>
      <div>
        <Button type="primary" onClick={test} loading={loading}>
          Primary
        </Button>
      </div>
      <div>
        <Button type="link" loading>
          Link
        </Button>
      </div>
    </>
  );
};
export const Danger = () => (
  <>
    <div>
      <Button danger={true} onClick={() => console.log('danger')}>
        Defult
      </Button>
      <Button danger={true} loading>
        Defult
      </Button>
    </div>
    <div>
      <Button type="primary" danger={true}>
        Primary
      </Button>
      <Button type="primary" danger={true} loading>
        Primary
      </Button>
    </div>
    <div>
      <Button type="link" danger={true}>
        Link
      </Button>
      <Button type="link" danger={true} loading>
        Link
      </Button>
    </div>
  </>
);
export const Size = () => {
  const [size, setSize] = useState('middle');
  return (
    <>
      <div>
        Click Button
        <Button onClick={e => setSize('large')}>Large</Button>
        <Button onClick={e => setSize('middle')}>Default</Button>
        <Button onClick={e => setSize('small')}>Small</Button>
      </div>
      <div>
        <Button size={size}>Default</Button>
        <Button size={size} type="primary">
          Primary
        </Button>
      </div>
      <div>
        <Button size={size} loading>
          Default
        </Button>
        <Button size={size} type="primary" loading>
          Primary
        </Button>
      </div>
    </>
  );
};
export const Round = () => {
  const [size, setSize] = useState('middle');
  return (
    <>
      <div>
        Click Button
        <Button onClick={e => setSize('large')}>Large</Button>
        <Button onClick={e => setSize('middle')}>Default</Button>
        <Button onClick={e => setSize('small')}>Small</Button>
      </div>
      <div>
        <Button size={size} shape="round">
          Default
        </Button>
        <Button size={size} type="primary" shape="round">
          Primary
        </Button>
      </div>
      <div>
        <Button size={size} shape="round" loading>
          Default
        </Button>
        <Button size={size} type="primary" shape="round" loading>
          Primary
        </Button>
      </div>
    </>
  );
};
export const Block = () => (
  <>
    <div style={{ width: '300px' }}>
      <Button block>Block</Button>
    </div>
    <div style={{ width: '300px' }}>
      <Button block shape="round">
        Block
      </Button>
    </div>
    <div style={{ width: '300px' }}>
      <Button block shape="round" loading>
        Block
      </Button>
    </div>
  </>
);
export const Disabled = () => (
  <>
    <Button disabled>Disabled</Button>
  </>
);
