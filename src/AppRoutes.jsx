import { BrowserRouter, Routes, Route } from "react-router";
import ExpensesAnalys from "./pages/ExpensesAnalys/ExpensesAnalys";
import { HomePage } from "./pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/expensesanalys" element={<ExpensesAnalys />} />
      </Routes>
    </BrowserRouter>
  );
};



export default AppRoutes;
