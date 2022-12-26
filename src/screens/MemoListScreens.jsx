import React from "react";
import { View, StyleSheet } from "react-native";

import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleButton';

export default function MemoListScreen (props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <MemoList />
      <CircleBotton 
      name="plus"
      onPress={() => {navigation.navigate('MemoCreate');}}
      />
    </View>
  );
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
});