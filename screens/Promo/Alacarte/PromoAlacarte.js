import React from "react";
import { View, ScrollView, Image } from "react-native";

import { BackHandlerPromoAlacarte } from "../../../component/promo/BackHandler";
import { DiskonMinimumTransaksi } from "../../../component/promo/BottomSheet";

import tw from "../../../lib/tailwind";
import PromoCarte from "../../../component/promo/Alacarte/PromoAlacarte";
import { Navigation } from "react-native-navigation";

const PromoAlacarte = ({ componentId }) => {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentWillAppear: () => {
          setAppIsReady(true);
          console.log("berada dihalaman menunggu render");
        },
        componentDidAppear: () => {
          console.log(`componentDidAppear ${componentId}`);
        },
        componentDidDisappear: () => {
          setAppIsReady(false);
          console.log(`componentDidDisappear ${componentId}`);
        },
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  if (!appIsReady) {
    return (
      <View
        style={tw`w-full bg-white h-full flex-row items-center justify-center`}
      >
        <Image
          source={require("../../../assets/gif/alamerch.gif")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  return (
    <View style={tw`mt-13 w-full h-full pb-20 bg-white`}>
      <ScrollView
        contentContainerStyle={tw`pb-28 bg-white px-2`}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        <PromoCarte componentId={componentId} />
      </ScrollView>
      <DiskonMinimumTransaksi componentId={componentId} />
      <BackHandlerPromoAlacarte componentId={componentId} />
    </View>
  );
};

PromoAlacarte.options = {
  bottomTabs: {
    visible: false,
    drawBehind: false,
    animate: false,
  },
  topBar: {
    visible: false,
    backButton: {
      visible: false,
    },
  },
  statusBar: {
    drawBehind: true,
    translucent: true,
    style: "dark",
    backgroundColor: "transparent",
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        translationX: {
          from: require("react-native").Dimensions.get("window").width,
          to: 0,
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        translationX: {
          from: 0,
          to: require("react-native").Dimensions.get("window").width,
          duration: 200,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        translationY: {
          from: 0,
          to: 1,
          duration: 3,
        },
      },
    },
  },
};

export default PromoAlacarte;
