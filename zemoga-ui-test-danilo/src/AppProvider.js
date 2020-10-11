import React, { Component } from 'react';
import App from './pages/App';
import { Provider } from 'react-redux';
import store from './store/store';

class AppProvider extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

export default AppProvider;
