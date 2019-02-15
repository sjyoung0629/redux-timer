import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from 'components/Timer';
import reducer from './reducer'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

let store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      // Provider 역할: store를 복사해서 child 컴포넌트에 넣는다
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
