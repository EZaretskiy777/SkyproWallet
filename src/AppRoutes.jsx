import { BrowserRouter, Routes, Route } from "react-router";
import { PrivateRoute } from "./components/PrivateRoute/PrivateRoute.jsx";
import ExpensesAnalys from "./pages/ExpensesAnalys/ExpensesAnalys";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage.jsx";
import { routesPath } from "./lib/routesPath.js";
import { useAuth } from "./providers/AuthProvider";

const AppRoutes = () => {
  const { isAuth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <PrivateRoute isAuth={isAuth} navigateTo={routesPath.LOGIN} />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/expensesanalys" element={<ExpensesAnalys />} />
        </Route>
        <Route
          element={
            <PrivateRoute isAuth={!isAuth} navigateTo={routesPath.MAIN} />
          }
        >
          <Route path={routesPath.LOGIN} element={<LoginPage />} />
          <Route path={routesPath.REGISTER} element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
