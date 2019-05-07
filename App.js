/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Provider } from 'react-redux';
import React, {Component} from 'react';
import MainComponent from './src/screens/MainComponent';
import configureStore from './configureStore';

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      store: configureStore(),
    };
  }

  render() {
    return (
      <Provider
        store={this.state.store}
      >
        <MainComponent />
      </Provider>
    );
  }
}
