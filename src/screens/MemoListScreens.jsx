import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";

import MemoList from '../components/MemoList';
import CircleBotton from '../components/CircleButton';
import LogOutBotton from "../components/LogOutBotton";

export default function MemoListScreen (props) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutBotton />,
    });
  },[]);

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