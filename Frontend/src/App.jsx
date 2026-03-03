import { RouterProvider } from "react-router";
import "./shared/styles/global.scss";
import { router } from "./app.routes";
import { AuthProvider } from "./features/auth/authContext";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
