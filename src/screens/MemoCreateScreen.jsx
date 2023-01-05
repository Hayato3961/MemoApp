import React, { useState }  from 'react';
import { View,StyleSheet, TextInput, KeyboardAvoidingView, Alert, } from 'react-native';
import CircleButton from '../components/CircleButton';

import firebase from 'firebase';
import { translateErrors } from '../utils';

export default function MemoCreateScreen(props){
  const { navigation }= props;
  const [bodyText, setBodyText] = useState('');

  function handlePress () {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${ currentUser.uid }/memos`);
    ref.add({
      bodyText,
      updatedAt: new Date(),
    })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code)
        Alert.alert(errorMsg.title, errorMsg.descripution);
      });
  }
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height"  >
      <View style={styles.inputContainer}>
        <TextInput 
          value={bodyText}
          multiline style={styles.input}
          onChangeText={(text) => {setBodyText(text); }} 
          autoFocus
        />
      </View>
      <CircleButton 
      name="check"
      onPress={handlePress}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
  },

});