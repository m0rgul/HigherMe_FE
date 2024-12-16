import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./core/store";
import router from "./core/router";
import AuthCheck from "./core/router/components/AuthCheck";

const App = () => {
  return (
    // <Provider store={store}>
    //   <AuthCheck>
    //     <RouterProvider router={router} />
    //   </AuthCheck>
    // </Provider>
    <div>app</div>
  );
};

export default App;
