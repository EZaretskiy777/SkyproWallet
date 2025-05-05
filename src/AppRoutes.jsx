import { BrowserRouter, Routes, Route } from "react-router";
import ExpensesAnalys from "./pages/ExpensesAnalys/ExpensesAnalys";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx';
import { routesPath } from './lib/routesPath.js'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/expensesanalys" element={<ExpensesAnalys />} />
        <Route path={routesPath.LOGIN} element={<LoginPage />} />
        <Route path={routesPath.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};



export default AppRoutes;
