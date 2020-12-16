import React from 'react';
import {
  Provider
} from 'react-redux';
import {
  PersistGate
} from 'redux-persist/lib/integration/react';
import { UsersScreen } from './components/users'
const {
  store,
  persistor
} = require(`./redux/store`);


function App() {

  return (
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <UsersScreen />
      </Provider>
    </PersistGate>
  );
}

export default App;