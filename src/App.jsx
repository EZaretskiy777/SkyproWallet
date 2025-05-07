import { GlobalStyles } from "./globalStyles";
import AppRoutes from "./AppRoutes";
import { AuthProvider } from "./providers/AuthProvider";
import { TransactionsProvider } from "./providers/TransactionsProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <TransactionsProvider>
          <GlobalStyles />
          <GlobalStyles />
          <AppRoutes />
        </TransactionsProvider>
      </AuthProvider>
    </>
  );
}

export default App;
