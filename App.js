// import { StatusBar } from 'expo-status-bar';
// import Constants from 'expo-constants';
// import * as Notifications from 'expo-notifications';
// import * as Permissions from 'expo-permissions';
import { StatusBar } from 'expo-status-bar';
import { useKeepAwake } from 'expo-keep-awake';
import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux';
import Navigation from './src/navigation';
import './src/utils/timer';

import AlarmModal from './src/components/AlarmModal';

export default function App() {
  useKeepAwake();
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Navigation />
        <AlarmModal />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
