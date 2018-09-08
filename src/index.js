import '../ReactotronConfig';

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

import { Provider } from 'react-redux';
import store from './store';

import TodoList from './TodoList';

export default class App extends Component {

  render() {

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <TodoList />
        </View>
      </Provider>
    );
  }
}
