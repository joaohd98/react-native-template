import React from "react";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/lib/integration/react";
import {persistor, store} from "../redux/configure-store";
import LoginScreen from "../screens/login/view";

export default class Layout extends React.PureComponent {
  render = () => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <LoginScreen />
      </PersistGate>
    </Provider>
  );
}
