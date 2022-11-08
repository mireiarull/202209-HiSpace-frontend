import { useEffect } from "react";
import { Route, Routes } from "react-router";
import useApi from "../../hooks/useApi";
import FormPage from "../../pages/FormPage";
import HomePage from "../../pages/HomePage";

const App = () => {
  const { loadRobotsApi } = useApi();

  useEffect(() => {
    loadRobotsApi();
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="/create/:id" element={<FormPage />} />
      </Routes>
    </>
  );
};

export default App;
