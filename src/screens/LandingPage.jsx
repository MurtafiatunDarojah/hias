import React from "react";
import { Link } from "react-router-dom";
import { bgImg, logoImg } from "../img";
import "../index.css";

const LandingPage = () => {
  return (
    <>
      <div className="grid grid-rows-6 xl:px-32 py-10 h-screen sm:px-7">
        <div className="row-span-1 flex justify-between ">
          <img src={logoImg} alt="" className="w-32 h-10" />
          <p></p>
        </div>
        <div className="row-span-5 flex gap-11">
          <div className=" flex flex-col gap-6  justify-center md:items-start sm:items-center ">
            <h3 className="text-3xl font-bold">
              HAZARD INFORMATION AND SUGGESTION{" "}
              <span className="text-yellow-300">
                (HIAS) Saran dan Informasi Bahaya
              </span>
            </h3>
            <p className="text-gray-500">
              HIAS adalah wadah untuk menyampaikan informasi ketidaksesuaian
              (kondisi dan tindakan tidak aman) dan saran terkait keselataman,
              kesehatan kerja dan lingkungan.
            </p>
            <Link to={"/form"}>
              <button className="w-fit bg-yellow-300 px-20 py-2 rounded-lg font-bold">
                Mulai
              </button>
            </Link>
          </div>
          <img src={bgImg} alt="" className="md:block sm:hidden" />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
