import React from "react";
import { View, ScrollView, Image } from "react-native";
import { BackHandlerDiskonMenu } from "../../../component/promo/BackHandler";
import { DiskonMenuPilihTanggal } from "../../../component/promo/BottomSheet";
import tw from "../../../lib/tailwind";
import { Navigation } from "react-native-navigation";
import DiskonMenu from "../../../component/promo/Alacarte/DiskonMenu";

const MemoizeDiskonMenu = React.memo(DiskonMenu);

const PromoAlacarte = ({ componentId }) => {
  const pilihTanggalRef = React.useRef();
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
        componentWillAppear: () =>
          console.log("berada dihalaman menunggu render"),
        componentDidAppear: () => {
          setAppIsReady(true);
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
    <View style={tw`mt-13 w-full h-full bg-white`}>
      <ScrollView
        contentContainerStyle={tw`bg-white pb-48`}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
      >
        <MemoizeDiskonMenu pilihTanggalRef={pilihTanggalRef} />
      </ScrollView>
      <DiskonMenuPilihTanggal
        id="diskonMenuPilihTanggal"
        pilihTanggalRef={pilihTanggalRef}
      />
      <BackHandlerDiskonMenu componentId={componentId} />
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
        alpha: {
          from: 0,
          to: 1,
          duration: 300,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        alpha: {
          from: 1,
          to: 0,
          duration: 300,
        },
      },
    },
    setRoot: {
      enter: {
        waitForRender: true,
        enabled: true,
        alpha: {
          from: 1,
          to: 0,
          duration: 300,
        },
      },
    },
  },
};

export default PromoAlacarte;
