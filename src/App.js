import React, { Component } from 'react';
import './App.css';
import { store } from './redux'
import Info from './Info'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Info />
        </div>
      </Provider>
    );
  }
}

export default App;
