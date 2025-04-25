import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header/Header";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
