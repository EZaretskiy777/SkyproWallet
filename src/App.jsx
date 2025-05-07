import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";

function App() {
  return (
    <>
    <AuthProvider>
      <GlobalStyles />
      <AppRoutes />
    </AuthProvider>
    </>
  );
}

export default App;