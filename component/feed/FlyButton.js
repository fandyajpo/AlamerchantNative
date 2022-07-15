import React from "react";
import { View } from "react-native";
import { FAB } from "react-native-paper";
import { Plus, X, Feed, Event, Story } from "../../lib/listSvg";
import tw from "../../lib/tailwind";
const MyComponent = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <FAB.Group
      style={tw`absolute z-50`}
      open={open}
      color={"gray"}
      fabStyle={tw`bg-white/95`}
      icon={() =>
        open ? (
          <View style={tw`items-center justify-center w-full h-full`}>
            <X />
          </View>
        ) : (
          <View style={tw`items-center justify-center w-full h-full`}>
            <Plus col={"w-10 h-10 text-gray-700"} />
          </View>
        )
      }
      actions={[
        {
          icon: () => (
            <View style={tw`items-center justify-center w-full h-full`}>
              <Story />
            </View>
          ),
          label: "Story",
          onPress: () => console.log("Pressed star"),
        },
        {
          icon: () => (
            <View style={tw`items-center justify-center w-full h-full`}>
              <Event />
            </View>
          ),
          label: "Event",
          onPress: () => console.log("Pressed email"),
        },
        {
          icon: () => (
            <View style={tw`items-center justify-center w-full h-full`}>
              <Feed />
            </View>
          ),
          label: "Feed",
          onPress: () => console.log("Pressed notifications"),
        },
      ]}
      onStateChange={onStateChange}
      onPress={() => {
        if (open) {
          // do something if the speed dial is open
        }
      }}
    />
  );
};

export default MyComponent;
