import React from 'react';
import { Text } from 'react-native';
import styles from './style';

const MyText = () => {
  return (
    <Text style={[styles.text, styles.text1, { color: 'green' }]}>
      Hello, React Native Component
    </Text>
  );
};

export default MyText;
