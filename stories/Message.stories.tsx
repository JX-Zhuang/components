import React, { useState } from 'react';
import message from '../src/components/Message';
import Button from '../src/components/Button';
export default {
  title: 'Message',
  component: message
};

export const Type = () => {
  const info = () => {
    message.info('This is a info message');
  };
  const success = () => {
    message.success('This is a success message', 10);
  };

  const error = () => {
    message.error('This is an error message');
  };

  const warning = () => {
    message.warning('This is a warning message');
  };
  return (
    <div>
      <div>
        <Button onClick={info}>info</Button>
      </div>
      <div>
        <Button onClick={success}>success</Button>
      </div>
      <div>
        <Button onClick={error}>error</Button>
      </div>
      <div>
        <Button onClick={warning}>warning</Button>
      </div>
    </div>
  );
};
