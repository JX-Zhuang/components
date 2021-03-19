import React from 'react';
import Card from '../src/components/Card';
export default {
  title: 'Card',
  component: Card
};
export const CardDemo = () => {
  return (
    <div style={{ background: 'rgba(179,183,248,1)' }}>
      <Card
        style={{
          width: '283px',
          marginBottom: '20px'
        }}
        imgUrl="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=137628589,3436980029&fm=26&gp=0.jpg"
        title="Ai面试实战"
        description="热门试题等你刷题"
        action={{
          children: '去练习',
          onClick: () => {
            console.log(99);
          }
        }}
      />
      <Card
        style={{
          width: '283px'
        }}
        imgUrl="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        title="Ai面试实战"
        description="热门试题等你刷题"
        action={{
          children: '敬请期待',
          disabled: true,
          onClick: () => {
            console.log(99);
          }
        }}
      />
    </div>
  );
};
