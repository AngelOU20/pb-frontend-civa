import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { FootballerDetailPage } from "../pages/FootballerDetailPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/futbolistas/:id" element={<FootballerDetailPage />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};
