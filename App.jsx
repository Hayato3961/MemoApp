import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppBar from './src/components/AppBar';
import MemoList from './src/components/MemoList';
import CircleBotton from './src/components/CircleButton';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleBotton>+</CircleBotton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});
