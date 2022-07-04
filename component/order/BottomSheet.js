import BottomSheet from '@gorhom/bottom-sheet';
import React from 'react'

import { StyleSheet, View, Text } from 'react-native';

const BottomSheets = ({ bottomSheetRef,snapPoints ,handleSheetChanges }) => {
  return (
    
    <View style={styles.container}>
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
    >
      <View style={styles.contentContainer}>
        <Text>Awesome 🎉</Text>
      </View>
    </BottomSheet>
  </View>
 
  )
}

export default BottomSheets

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
