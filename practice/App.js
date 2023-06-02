import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./adapters/router";
import UserStoreProvider from "./store/1_reducer";
import ReducerQ1Page from "./domain/1_reducer/components/pages/Q1";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      {/* <UserStoreProvider>
        <ReducerQ1Page />
      </UserStoreProvider> */}
    </>
  );
}

export default App;
