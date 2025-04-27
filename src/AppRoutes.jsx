import { BrowserRouter, Routes, Route } from "react-router";
import ExpensesAnalys from "./pages/ExpensesAnalys/ExpensesAnalys";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Заглушка</h1>} />
        <Route path="/expensesanalys" element={<ExpensesAnalys />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
