import {
  Text,
  FlatList,
  View,
  Pressable,
  Image,
  RefreshControl,
  ScrollView,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import React, {
  useState,
  useContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from "react";
import SplashScreen from "react-native-splash-screen";
import { Navigation } from "react-native-navigation";

import { GlobalContext } from "../lib/ctx";
import tw from "twrnc";
import Svg, { Path } from "react-native-svg";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StudySVG, RightArrowSVG, Speaker } from "../lib/listSvg";

import BottomShit from "../component/home/BottomSheet";
import Clock from "../component/home/Clock";
import Chart from "../component/home/Chart";

const HEADER_HEIGHT = 230;
const offset = new Animated.Value(0);

const UserCard = React.memo(() => {
  const { state } = useContext(GlobalContext);

  const insets = useSafeAreaInsets();
  const headerHeight = offset.interpolate({
    inputRange: [0, HEADER_HEIGHT + insets.top],
    outputRange: [HEADER_HEIGHT + insets.top, insets.top + 110],
    extrapolate: "clamp",
    useNativeDriver: true,
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        height: headerHeight,
        backgroundColor: "rgb(37,99,235)",
      }}
    >
      {/*Bulet bulet*/}
      <Image
        source={require("../assets/images/blueblue.webp")}
        style={tw`w-24 h-24 absolute rounded-full opacity-60 -right-8 -top-4`}
      />
      <Image
        source={require("../assets/images/blueblue.webp")}
        style={tw`w-32 h-32 absolute rounded-full opacity-60 -left-20 bottom-3`}
      />
      <Image
        source={require("../assets/images/blueblue.webp")}
        style={tw`w-24 h-24 absolute rounded-full opacity-60 right-24 bottom-1`}
      />
      {/*Bulet bulet*/}
      {/*Card*/}
      <View
        style={tw`w-full h-auto absolute bottom-3 bg-transparent px-4 flex flex-col`}
      >
        <View style={tw`w-full h-auto mb-8 bg-transparent items-center`}>
          <Clock />
        </View>

        {useMemo(() => {
          return (
            <View
              style={tw`w-full h-24 flex flex-row items-center bg-transparent`}
            >
              <View
                style={tw`w-18 h-18 mr-3 flex-none bg-transparent justify-center overflow-hidden rounded-lg`}
              >
                <Image
                  style={{
                    flex: 1,
                    width: "100%",
                    height: undefined,
                    width: undefined,
                    resizeMode: "contain",
                    backgroundColor: "white",
                  }}
                  source={
                    state?.pic?.image?.[0]
                      ? { uri: state.pic.image[0].thumbnailUrl }
                      : require("../assets/images/loadingBall.gif")
                  }
                  resizeMode={state?.pic?.image?.[0] ? "cover" : "contain"}
                />
              </View>

              <View style={tw`w-auto h-full flex flex-col bg-transparent`}>
                <View
                  style={tw`w-full h-12 bg-transparent flex justify-center`}
                >
                  <Text style={tw`text-base font-bold text-white capitalize`}>
                    {state?.profile?.nama_lengkap
                      ? state.profile.nama_lengkap
                      : "-"}
                  </Text>
                  <Text style={tw`text-xs font-bold text-white`}>
                    {state?.profile?.kelas
                      ? state?.profile?.kelas + ` - ` + state?.profile?.jurusan
                      : "-"}
                  </Text>
                </View>
                <View style={tw`w-full h-9 bg-transparent flex flex-row`}>
                  <Pressable
                    // onPress={() => hapus()}
                    style={tw`bg-white rounded-md flex flex-row items-center px-3 justify-center`}
                  >
                    {/*<MaterialCommunityIcons name="face-recognition" size={16} color="black" />*/}
                    <Text style={tw`text-gray-500 font-bold text-base px-2`}>
                      Clock In
                    </Text>
                  </Pressable>
                  <View style={tw`w-2`} />
                  <Pressable
                    // onPress={() => hapus()}
                    style={tw`bg-white rounded-md flex flex-row items-center px-3 justify-center`}
                  >
                    {/*<MaterialCommunityIcons name="face-recognition" size={16} color="black" />*/}
                    <Text style={tw`text-gray-500 font-bold text-base px-2`}>
                      Clock Out
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          );
        }, [state.profile])}
      </View>
      {/*Card*/}
    </Animated.View>
  );
});

const PresensiCard = React.memo(() => {
  return (
    <View style={tw`w-full px-3 py-3`}>
      <ImageBackground
        source={require("../assets/images/blueblue.webp")}
        style={tw`rounded-md overflow-hidden shadow border border-white`}
      >
        <View
          style={tw`w-full rounded-md py-2.5 px-3 flex flex-row items-center justify-between bg-transparent`}
        >
          <View
            style={tw`bg-gray-100/70 border border-gray-200 p-2 w-3/5 h-full rounded-md`}
          >
            <Text style={tw`text-white font-bold text-base`}>Presensi</Text>
            <View style={tw`flex flex-row items-center py-1`}>
              <RightArrowSVG col={"text-blue-400 w-4 h-4"} />
              <Text style={tw`text-white font-bold text-xs underline`}>
                Jalan jalan
              </Text>
            </View>
            <View style={{ backgroundColor: "transparent" }}>
              <Text style={tw`text-blue-500 text-sm font-bold`}>
                Datang : 03.33
              </Text>
              <Text style={tw`text-blue-500 text-sm font-bold`}>
                Pulang : 06.43
              </Text>
            </View>
          </View>
          <View style={tw`w-24 h-24 flex items-center justify-center`}>
            <StudySVG col={"absolute w-36 h-36 text-blue-500/40 right-0"} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
});

const CARD_WIDTH = Dimensions.get("window").width * 0.8;
const CARD_HEIGHT = Dimensions.get("window").height * 0.7;
const SPACING_FOR_CARD_INSET = Dimensions.get("window").width * 0.1 - 10;

const cards = [
  { name: "Card 1", key: 1 },
  { name: "Card 2", key: 2 },
  { name: "Card 3", key: 3 },
  { name: "Card 4", key: 4 },
  { name: "Card 5", key: 5 },
  { name: "Card 6", key: 6 },
  { name: "Card 7", key: 7 },
  { name: "Card 8", key: 8 },
  { name: "Card 9", key: 9 },
  { name: "Card 10", key: 10 },
];
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
const transitionAnimation = (index) => {
  return {
    opacity: xOffset.interpolate({
      inputRange: [(index - 1) * 80, index * 80, (index + 1) * 80],
      outputRange: [0, 1, 0],
    }),
  };
};
const renderItem = ({ item, index }) => (
  <View
    style={tw`w-42 h-64 bg-white rounded ${
      index + 1 < cards.length ? (index < 1 ? "ml-26 mr-4" : "mr-4") : ""
    }`}
  >
    <Text style={tw`text-red-900`}>
      {item.name} {index}
    </Text>
  </View>
);

const News = React.memo(() => {
  // const onEndReached = () => {
  //   console.log('end reached');
  //   if (!this.onEndReachedCalledDuringMomentum) {
  //       console.log('loading more archived products');
  //       this.loadMoreProducts();
  //       this.onEndReachedCalledDuringMomentum = true;
  //   }
  // }

  // const onMomentumScrollBegin = () => { this.onEndReachedCalledDuringMomentum = false; }

  return (
    <ImageBackground
      source={require("../assets/images/blueblue.webp")}
      style={tw`w-full h-auto py-3 mb-3`}
    >
      <Animated.View
        style={[
          {
            position: "absolute",
            top: 12,
            left: 0,
            right: 0,
            zIndex: 0,
            width: "30%",
            height: "100%",
            backgroundColor: `transparent`,
            alignItems: "center",
            justifyContent: "center",
          },
          transitionAnimation(0),
        ]}
      >
        <View style={tw`w-full h-auto flex items-center justify-center`}>
          <Speaker col={"w-14 h-14 text-blue-500/80"} />
          <Text style={tw`text-sm text-white font-bold mt-8`}>Pengumuman</Text>
        </View>
      </Animated.View>
      <FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: false }
        )}
        // onScroll={({e}) => setOpacity(e.nativeEvent.contentOffset.y)}
        // onScroll={(e) => pagination(e.nativeEvent.contentOffset.x)}
        // onScrollEndDrag={e => pagination(e.nativeEvent.velocity.x)}
        // getItemLayout={getItemLayout}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.key + index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`px-3`}
        bounces={false}
        // numColumns={2}
        // renderItem={this.renderItem}
        // ItemSeparatorComponent={this.ItemSeparatorComponent}
        // ListEmptyComponent={this.ListEmptyComponent}

        //code for optimization and load only visible items
        initialNumToRender={8}
        maxToRenderPerBatch={2}
        onEndReachedThreshold={0.1}
        // removeClippedSubviews={true} // Unmount components when outside of window
        // initialNumToRender={2} // Reduce initial render amount
        // maxToRenderPerBatch={1} // Reduce number in each render batch
        // updateCellsBatchingPeriod={100} // Increase time between renders
        // windowSize={7} // Reduce the window size
        // onMomentumScrollBegin={this.onMomentumScrollBegin}
        // onEndReached={this.onEndReached}
      />
    </ImageBackground>
  );
});

const Home = ({ componentId }) => {
  const { state, fnr, setSecure, getSecure } = React.useContext(GlobalContext);

  const setProfile = useCallback(() => {
    if (!state?.profile?.nama) {
      const getProfile = getSecure("profile");
      const pars = JSON.parse(getProfile);
      fnr({
        type: "profile",
        payload: pars,
      });
    }
  }, [state.profile]);

  React.useEffect(() => {
    Promise.all([fnr({ type: "screen", payload: "home" }), setProfile()]);
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () =>
          Promise.all([fnr({ type: "screen", payload: "home" }), setProfile()]),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  return (
    <View style={{ flex: 1, backgroundColor: "whitesmoke" }}>
      <UserCard />
      <ScrollView
        // overScrollMode={'auto'}
        scrollEnabled={true}
        nestedScrollEnabled={false}
        alwaysBounceVertical={true}
        vertical={true}
        horizontal={false}
        directionalLockEnabled={true}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        // removeClippedSubviews={true}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={tw`h-68 bg-blue-600`} />
        <PresensiCard />
        <News />
        <Chart />
        {/**/}
        {/*<News />*/}
        {/*<Chart />*/}
      </ScrollView>
    </View>
  );
};
export default Home;
