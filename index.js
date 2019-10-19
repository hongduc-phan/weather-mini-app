import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./src/redux/reducers";

//page
import AppContainer from "./src/page/App";

const store = createStore(rootReducer);

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(<App />, document.getElementById("app"));
