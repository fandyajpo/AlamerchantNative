import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from '../../lib/tailwind';
import {Back} from '../../lib/listSvg';
import {PushRoute, BackRoute} from '../../lib/ctx';
const BackHandlerComponent = ({componentId}) => {
  return (
    <View style={tw`absolute bottom-0 w-full h-32 bg-mgray p-4 z-50`}>
      <View style={tw`flex-row items-center justify-between w-full`}>
        <TouchableOpacity
          style={tw`w-2/6 shadow-xl`}
          onPress={() => BackRoute(componentId)}>
          <Back />
        </TouchableOpacity>
        <View style={tw`w-2/6 h-8 flex items-center justify-center`}>
          <Text style={tw`text-gray-800 text-lg font-bold`}>Comment</Text>
          <View style={tw`w-full h-0.5 rounded-full bg-myellow`} />
        </View>
        <View style={tw`w-2/6`} />
      </View>
    </View>
  );
};

export default BackHandlerComponent;
