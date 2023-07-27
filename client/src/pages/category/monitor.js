

import React from 'react';
import MainLayout from '../../layouts/mainLayout';

const MonitorPage = () => {
  return (
    <div className='py-20'>
      <h1> monitorPage</h1>;
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};