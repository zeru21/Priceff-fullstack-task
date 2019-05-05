import React from 'react';
import { createStore,
      applyMiddleware
    } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import './App.css';
import reducer from './Reducer';
import UsersStat from './Component/UsersStat';
const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  console.log("Reducer: ", reducer);
  return (
    <Provider store={store}>
    <div className="App">
        <UsersStat />
    </div>
  </Provider>
  );
}

export default App;
