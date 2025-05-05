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
 login__registration

export default App;

export default App;
 main
