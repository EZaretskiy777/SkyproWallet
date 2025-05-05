import { BrowserRouter, Routes, Route } from "react-router";
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute.jsx';
import ExpensesAnalys from "./pages/ExpensesAnalys/ExpensesAnalys";
import { LoginPage } from './pages/LoginPage/LoginPage.jsx';
import { RegisterPage } from './pages/RegisterPage/RegisterPage.jsx';
import { routesPath } from './lib/routesPath.js'
import { useAuth } from "./providers/AuthProvider";

const AppRoutes = () => {
  const { isAuth } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute isAuth={isAuth} />}/>
        <Route path="/" element={<h1>Заглушка</h1>} />
        <Route path="/expensesanalys" element={<ExpensesAnalys />} />
        <Route path={routesPath.LOGIN} element={<LoginPage />} />
        <Route path={routesPath.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};


export default AppRoutes;
