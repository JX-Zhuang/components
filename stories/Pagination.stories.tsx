import React from 'react';
import Pagination from '../src/components/Pagination';
export default {
  title: 'Pagination',
  component: Pagination
};
export const PaginationDemo = () => {
  return (
    <React.Fragment>
      <Pagination total={100} showQuickJumper={false} />
      <Pagination total={100} />
      <Pagination
        total={100}
        showSizeChanger={true}
        onChange={(page, pageSize) => console.log(page, pageSize)}
      />
      <Pagination
        current={3}
        pageSize={20}
        total={100}
        showSizeChanger={true}
        onChange={(page, pageSize) => console.log(page, pageSize)}
      />
    </React.Fragment>
  );
};
