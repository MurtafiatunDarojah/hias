import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import Form from "./layouts/Form";
import MainForm from "./screens/MainForm";
import Suggestion from "./screens/Suggestion/Suggestion";
import Nonconformity from "./screens/Nonconformity/Nonconformity";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* --------- LANDING PAGE ---------- */}
        <Route path="/" element={<LandingPage />} />

        {/* ------------- FORM -------------- */}
        <Route path="/form" element={<Form />}>
          <Route path="/form/" element={<MainForm />} />
          <Route path="/form/saran" element={<Suggestion />} />
          <Route path="/form/ketidaksesuaian" element={<Nonconformity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
