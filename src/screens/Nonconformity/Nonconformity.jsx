import React, { useState } from "react";
import { useNavigate } from "react-router";

const Nonconformity = () => {
  const [reason, setReason] = useState("");

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setReason(e.target.value);
  };

  const onBack = () => {
    window.history.back();
  };

  const onNext = () => {
    navigate("/form/saran");
  };

  console.log(reason);

  return (
    <div>
      <form>
        <button
          type="button"
          onClick={onBack}
          class="focus:outline-none text-white bg-yellow-300 hover:bg-yellow-500 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-5"
        >
          Kembali
        </button>
        <p className="text-lg font-semibold">Pilih Kategori informasi</p>
        <p className="mb-2">
          Bagi program yang belum tercantum silahkan memilih (other) dan mengisi
          nama program yang anda ikuti.
        </p>
        <div className="flex flex-col gap-2 mb-5">
          <di
            className={`flex items-center pl-4 border border-${
              reason === "Hampir Celaka" ? "yellow" : "gray"
            }-400 rounded dark:border-gray-700`}
          >
            {" "}
            <input
              type="radio"
              value={"Hampir Celaka"}
              checked={setReason === "kesehatan"}
              onChange={handleOptionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
              
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Hampir Celaka
            </label>
          </di>
          <div
            className={`flex items-center pl-4 border border-${
              reason === "Kondisi Tidak Aman" ? "yellow" : "gray"
            }-400 rounded dark:border-gray-700`}
          >
            {" "}
            <input
              type="radio"
              value={"Kondisi Tidak Aman"}
              checked={setReason === "Kondisi Tidak Aman"}
              onChange={handleOptionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600"
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Kondisi Tidak Aman
            </label>
          </div>
          <div
            className={`flex items-center pl-4 border border-${
              reason === "Tindakan Tidak Aman" ? "yellow" : "gray"
            }-400 rounded dark:border-gray-700`}
          >
            {" "}
            <input
              type="radio"
              value={"Tindakan Tidak Aman"}
              checked={setReason === "Tindakan Tidak Aman"}
              onChange={handleOptionChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 "
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tindakan Tidak Aman
            </label>
          </div>
        </div>
        <button
          type="submit"
          onClick={onNext}
          className="text-white font-semibold bg-yellow-300  hover:bg-yellow-400 w-full rounded-lg py-2"
        >
          Lanjut
        </button>
      </form>
    </div>
  );
};

export default Nonconformity;
