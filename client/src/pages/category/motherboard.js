
import React from 'react';
import MainLayout from '../../layouts/mainLayout';

const MotherboardPage = () => {
  return (
    <div className='py-20'>
      <h1>MotherboardPage</h1>;
    </div>
  );
};

export default MotherboardPage;


MotherboardPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
