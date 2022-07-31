import React, { Suspense } from "react";
import { useStyle } from "./assets/styles/app";
import Spinner from "./components/Spinner";
import { store } from "./statemanagement/store";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";

const App = () => {
  const classes = useStyle();
  return (
    <Suspense fallback={<Spinner/>}>
      <Provider store={store}>
        <div className={classes.app}>
          <AppRoutes />
        </div>
      </Provider>
    </Suspense>
  );
};

export default App;
