import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from '../../lib/tailwind';
import {OpenOrder, CloseOrder, OutletClose, Search} from '../../lib/listSvg';
import {Navigation} from 'react-native-navigation';
import {navOption} from '../../lib/ctx';

const Header = ({typeRef, type, setType}) => {
  const swithcType = useCallback(index => {
    setType(index);
    typeRef.current.setPage(index);
  }, []);

  return (
    <View
      style={tw`h-[7rem] flex flex-row bg-mgray absolute top-0 z-10 w-full px-4 border-b-2 border-l border-r border-gray-300 rounded-xl`}>
      <View style={tw`flex-row justify-between items-end mb-4 w-full`}>
        <TouchableOpacity
          onPress={() => swithcType(0)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}>
          <Text
            style={tw`${
              type === 0
                ? 'text-myellow border-myellow border-b-2'
                : 'text-gray-800 border-b-0'
            } text-sm font-bold mb-0.5 mx-2 `}>
            All
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swithcType(1)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}>
          <Text
            style={tw`${
              type === 1
                ? 'text-myellow border-myellow border-b-2'
                : 'text-gray-800 border-b-0'
            } text-sm font-bold mb-0.5 mx-2`}>
            Rejected
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swithcType(2)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}>
          <Text
            style={tw`${
              type === 2
                ? 'text-myellow border-myellow border-b-2'
                : 'text-gray-800 border-b-0'
            } text-sm font-bold mb-0.5 mx-2`}>
            Canceled
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => swithcType(3)}
          style={tw`h-8 flex items-center justify-center`}
          activeOpacity={0.5}>
          <Text
            style={tw`${
              type === 3
                ? 'text-myellow border-myellow border-b-2'
                : 'text-gray-800 border-b-0'
            } text-sm font-bold mb-0.5 mx-2`}>
            Order Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default React.memo(Header);
