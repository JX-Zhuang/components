import React from 'react';
import Button from '../src/components/Button';
import Input from '../src/components/Input';
export default {
  title: 'Input',
  component: Input
};
export const InputDemo = () => {
  return (
    <React.Fragment>
      <div style={{ width: '400px' }}>
        <Input
          placeholder="请输入用户名"
          onChange={e => console.log(e.target.value)}
        />
        <Input placeholder="请输入密码" type="password" />
        <Input placeholder="请输入用户名" showError errorMessage="错误信息" />
        <Input
          placeholder="请输入密码"
          type="password"
          extra={
            <Button
              style={{
                borderLeft: '1px solid #ccc',
                borderRadius: '0'
              }}
              size="small"
              type="text"
            >
              忘记密码?
            </Button>
          }
        />
      </div>
    </React.Fragment>
  );
};
