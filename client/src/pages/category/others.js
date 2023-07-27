

import React from 'react';
import MainLayout from '../../layouts/mainLayout';

const OthersPage = () => {
  return (
    <div className='py-20'>
      <h1>CPU / Processor Category Page</h1>;
    </div>
  );
};

export default OthersPage;

OthersPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};