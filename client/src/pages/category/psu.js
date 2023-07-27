import React from "react";
import MainLayout from "../../layouts/mainLayout";

const PsuPage = () => {
  return (
    <div className="py-20">
      <h1>PsuPage</h1>;
    </div>
  );
};

export default PsuPage;
PsuPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};
