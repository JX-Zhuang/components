import React, { useState } from 'react';
import Modal from '../src/components/Modal';
import Button from '../src/components/Button';
import './button.scss';

export default {
  title: 'Modal',
  component: Modal
};
export const Basic = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  const onCancel = () => {
    setVisible(false);
    console.log('cancel');
  };
  const onOk = () => {
    setVisible(false);
    console.log('ok');
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={toggle}>测试</Button>
      <Modal visible={visible} title="标题" onCancel={onCancel} onOk={onOk}>
        <div>内容</div>
      </Modal>
    </div>
  );
};
export const Loading = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={toggle}>测试</Button>
      <Modal
        confirmLoading
        visible={visible}
        title="标题"
        onCancel={toggle}
        onOk={toggle}
      >
        <div>内容</div>
      </Modal>
    </div>
  );
};
export const Custom = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={toggle}>测试</Button>
      <Modal
        visible={visible}
        title="标题"
        onCancel={toggle}
        onOk={toggle}
        footer={
          <Button block type="primary" shape="round" size="large">
            Login
          </Button>
        }
      >
        <div>内容</div>
      </Modal>
    </div>
  );
};
export const NoTitle = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={toggle}>测试</Button>
      <Modal
        visible={visible}
        onCancel={toggle}
        onOk={toggle}
        footer={
          <Button block type="primary" shape="round" size="large">
            Login
          </Button>
        }
      >
        <div>内容</div>
      </Modal>
    </div>
  );
};
export const NoCloseBtn = () => {
  const [visible, setVisible] = useState(false);
  const toggle = () => {
    setVisible(!visible);
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={toggle}>测试</Button>
      <Modal
        visible={visible}
        closable={false}
        footer={
          <Button
            block
            type="primary"
            shape="round"
            size="large"
            onClick={toggle}
          >
            Login
          </Button>
        }
      >
        <div>内容</div>
      </Modal>
    </div>
  );
};
const mockApi = () =>
  new Promise(r => {
    setTimeout(() => r('123'), 2000);
  });
export const Confirm = () => {
  const onClick = () => {
    Modal.confirm({
      content: '确定要离开吗？',
      onOk: () => {
        console.log('ok');
      },
      onCancel: () => {
        console.log('cancel');
      }
    });
  };
  const onClickPromise = () => {
    Modal.confirm({
      content: '确定要离开吗？',
      onOk: async () => {
        const r = await mockApi();
        console.log('ok', r);
      },
      onCancel: () => {
        console.log('cancel');
      }
    });
  };
  return (
    <div style={{ padding: '100px' }}>
      <Button onClick={onClick}>测试</Button>
      <Button onClick={onClickPromise}>Loading</Button>
    </div>
  );
};
