import React from "react";
import { View, TouchableOpacity } from 'react-native';
import tw from '../../lib/tailwind';
import { OpenOrder } from "../../lib/listSvg"
import { Navigation } from 'react-native-navigation';
import { navOption } from '../../lib/ctx';

const Header = (props) => {

  React.useEffect(() => {
    console.log("Header rerender.");
  })

  return (
    <View style={tw`h-[3.5rem] flex flex-row bg-mgray px-4`}>
      {/* <TouchableOpacity style={tw`flex-row justify-end items-end mb-4 w-full`} 
       onPress={() => Navigation.push(props.componentId, {
        component: {
          name: 'MerchantStatus',
          options: (Platform.OS !== 'ios' && navOption)
        }
      })}
      >
       <OpenOrder/>
      </TouchableOpacity> */}
    </View>
  );
}
export default Header
