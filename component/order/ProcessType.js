import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import tw from '../../lib/tailwind';

const ProcessType = ({pageRef, pages, setPages}) => {
  const switchPage = React.useCallback(index => {
    pageRef.current.setPage(index);
    setPages(index);
  }, []);

  return (
    <View
      style={tw`bg-white w-full h-16 absolute top-28 z-10 shadow-sm border-b-2 rounded-b-xl border-gray-300`}>
      <ScrollView
        horizontal={true}
        contentContainerStyle={tw`flex-row items-center px-4`}
        showsHorizontalScrollIndicator={false}>
        <TouchableOpacity
          onPress={() => switchPage(0)}
          style={tw`${
            pages === 0 ? 'bg-violet-500/10' : 'bg-transparent'
          } w-auto h-9 rounded-full items-center justify-center `}>
          <Text
            style={tw`${
              pages === 0 ? 'text-violet-500' : 'text-gray-800'
            } px-6 text-sm font-bold`}>
            New
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(1)}
          style={tw`${
            pages === 1 ? 'bg-blue-500/10' : 'bg-transparent'
          } w-auto h-9 rounded-full items-center justify-center `}>
          <Text
            style={tw`${
              pages === 1 ? 'text-blue-500' : 'text-gray-800'
            } px-6 text-sm font-bold`}>
            Process
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(2)}
          style={tw`${
            pages === 2 ? 'bg-orange-500/10' : 'bg-transparent'
          } w-auto h-9 rounded-full items-center justify-center `}>
          <Text
            style={tw`${
              pages === 2 ? 'text-orange-500' : 'text-gray-800'
            } px-6 text-sm font-bold`}>
            Ready
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(3)}
          style={tw`${
            pages === 3 ? 'bg-gray-600' : 'bg-transparent'
          } w-auto h-9 rounded-full items-center justify-center `}>
          <Text
            style={tw`${
              pages === 3 ? 'text-white' : 'text-gray-800'
            } px-6 text-sm font-bold`}>
            Unpaid
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(4)}
          style={tw`${
            pages === 4 ? 'bg-green-500/10' : 'bg-transparent'
          } w-auto h-9 rounded-full items-center justify-center `}>
          <Text
            style={tw`${
              pages === 4 ? 'text-green-500' : 'text-gray-800'
            } px-6 text-sm font-bold`}>
            Done
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default React.memo(ProcessType);
