import React from 'react';
import tw from 'twrnc';
import { View, Image } from 'react-native';

export const Loading = React.memo(({isHidden}) => {
  return (
    <View style={tw`${!isHidden ? 'hidden' : ''} w-full h-full absolute z-10 bg-black/15 justify-center items-center`}>
      <Image
        style={tw`w-20 h-20 bg-white justify-center items-center rounded-lg`}
        source={require('../assets/images/loadingBall.gif')}
        resizeMode="contain"
      />
    </View>
  )
})
