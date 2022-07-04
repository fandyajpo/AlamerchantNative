import React from 'react';
import {
  View,
  Text,
  Button,
  useWindowDimensions,
  StyleSheet,
  Platform,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {navOption} from '../lib/ctx';
import tw from '../lib/tailwind';
import Test from '../component/promo/test';
const Promo = props => {
  return (
    <>
      <Test />
    </>
  );
};
export default Promo;
