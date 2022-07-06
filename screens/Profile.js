import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import tw from "../lib/tailwind";

import ProfilePage from "../component/profileMerchant/ProfilePage";

const Feed = ({ componentId }) => {
  return (
    <View>
      <View
        style={tw`border-t-2 border-r border-l rounded-full border-gray-300 z-50 w-full absolute top-60 h-4`}
      />
      <View style={tw`w-full h-full`}>
        <ProfilePage componentId={componentId} />
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      />
    </View>
  );
};

export default React.memo(Feed);
