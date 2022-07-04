import React from 'react';
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Header from '../component/feed/Header';
import BottomSheet from '../component/followers/BottomSheet';
import tw from '../lib/tailwind';
import {Dropdown, Like, UnLike, Comment} from '../lib/listSvg';
import {GlobalPortal} from '../lib/sheet';
import FeedPage from '../component/feed/FeedPage';
const Feed = ({componentId}) => {
  return (
    <View>
      <View
        style={tw`border-t-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute top-60 w-full h-4`}
      />
      <View style={tw`w-full h-full`}>
        <FeedPage componentId={componentId} />
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}></View>
    </View>
  );
};

export default React.memo(Feed);
