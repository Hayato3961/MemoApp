import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';

export default function circleBotton(props){
  const {children, style} = props;
  return (
    <View style={[styles.circleBotton, style]}>
      <Text style={styles.circleBottonLabel}>{children}</Text>
    </View>
  );
}

circleBotton.propTypes = {
   children: string.isRequired,
   style: shape(),
};

circleBotton.defaultProps - {
  style: null,
};

const styles = StyleSheet.create({
  circleBotton: {
    backgroundColor: '#3B60E2',
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 40,
    bottom: 40,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleBottonLabel: {
    color: '#ffffff',
    fontSize: 40,
    lineHeight: 40,
  },
});