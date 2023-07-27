import React from "react";
import MainLayout from "../../layouts/mainLayout";

const Storage = () => {
  return (
    <div className="py-20">
      <h1>ram </h1>;
    </div>
  );
};

export default Storage;

Storage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};