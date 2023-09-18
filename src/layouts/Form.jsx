import React from "react";
import { Outlet } from "react-router";

const Form = () => {
  return (
    <div className="flex justify-center min-h-screen w-full xl:py-5 xl:px-5 sm:py-2 sm:px-2 bg-slate-200">
      <div className="xl:w-6/6 sm:w-6/6 border-2 border-solid border-yellow-300 border-t-8 rounded-xl shadow-xl bg-white p-7">
        <h3 className="text-3xl font-semibold mb-10">
          HAZARD INFORMATION AND SUGGESTION (HIAS) (Saran dan Informasi Bahaya)
        </h3>
        <Outlet />
      </div>
    </div>
  );
};

export default Form;
