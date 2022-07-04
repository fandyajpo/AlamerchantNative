import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import tw from '../../lib/tailwind';
import {Dropdown, PendapatanBersihIcon} from '../../lib/listSvg';
import {List} from 'react-native-paper';
const PendapatanBersih = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View
      style={tw`bg-white shadow-sm w-full rounded-3xl border border-gray-300 px-3 py-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <View>
          <View style={tw`flex-row items-center`}>
            <PendapatanBersihIcon />
            <Text style={tw`text-gray-800 text-sm ml-2`}>
              Pendapatan Bersih
            </Text>
          </View>
          <Text style={tw`text-gray-800 text-3xl font-semibold`}>
            Rp1.450.000
          </Text>
        </View>
        <TouchableOpacity activeOpacity={0.5}>
          <Dropdown />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PendapatanBersih;
