import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, StyleSheet, Text, Alert } from "react-native";
import firebase from "firebase";

export default function LogOutBotton() {
  const navigation = useNavigation(); 
  
  function handPress () {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return(
    <TouchableOpacity  onPress={ handPress } style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontsize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
});