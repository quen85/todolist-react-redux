import React, { Component } from 'react';
import Todo from "./features/todos/containers";
import "./App.css";
import { Provider } from 'react-redux';
import store from './redux/store';


class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Todo />
        </Provider>
    );
  }
}

export default App;
