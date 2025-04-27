import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import router from "./router";
import store from "./store";
import SessionCheck from "components/SessionCheck";

const App = () => {
  return (
    <Provider store={store}>
      <SessionCheck>
        <RouterProvider router={router} />;
      </SessionCheck>
    </Provider>
  );
};

export default App;
