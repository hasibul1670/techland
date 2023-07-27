import React from "react";
import MainLayout from "../../layouts/mainLayout";

const RamPage = () => {
  return (
    <div className="py-20">
      <h1>ram </h1>;
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
