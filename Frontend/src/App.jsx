import { RouterProvider } from "react-router";
import "./shared/styles/global.scss";
import { router } from "./app.routes";
import { AuthProvider } from "./features/auth/authContext";
import { SongContextProvider } from "./features/home/song.Context";

const App = () => {
  return (
    <AuthProvider>
      <SongContextProvider>
        <RouterProvider router={router} />
      </SongContextProvider>
    </AuthProvider>
  );
};

export default App;
