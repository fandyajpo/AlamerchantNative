// import React from "react";
// import { Animated, Pressable, StyleSheet } from "react-native";
import tw from "../../lib/tailwind";
// import { Plus } from "../../lib/listSvg";

// const FlyAction = () => {
//   const open = React.useRef(new Animated.Value(0)).current;

//   React.useEffect(() => {
//     const control = () => {
//       Animated.timing(open, {
//         toValue: 500,
//         duration: 10000,
//         useNativeDriver: true,
//       }).start();
//     };
//   }, [open]);
//   return (
//     <Animated.View
//       style={[
//         tw` absolute h-15 w-15 z-10 bottom-4 right-4 bg-black/20 rounded-full items-center justify-center`,
//       ]}
//     >
//       <Pressable onPress={() => control}>
//         <Plus col={"w-10 h-10 text-gray-800"} />
//       </Pressable>
//     </Animated.View>
//   );
// };

// export default React.memo(FlyAction);

import React from "react";
import { Animated, Pressable, Text, View } from "react-native";

export default function Ikan() {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const on = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      useNativeDriver: true,
      duration: 100,
    }).start();
  };

  const off = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 100,
    }).start();
  };

  React.useEffect(() => {
    off, on;
  });

  return (
    <View
      style={[
        { flex: 1, alignItems: "center", justifyContent: "center" },
        tw`absolute z-10 bottom-4 right-4`,
      ]}
    >
      <Pressable onPress={off} style={tw`bg-black p-1`}>
        <Text>Off</Text>
      </Pressable>
      <Pressable onPress={on} style={tw`bg-white p-1`}>
        <Text>On</Text>
      </Pressable>

      <Animated.View
        style={{
          width: 250,
          height: 50,
          backgroundColor: "black",
          opacity: fadeAnim,
        }}
      >
        <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
          Fading in
        </Text>
      </Animated.View>
    </View>
  );
}
