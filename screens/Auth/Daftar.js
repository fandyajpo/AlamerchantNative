import React from "react";
import { View, Image } from "react-native";
import DaftarPage from "../../component/auth/DaftarPage";
import { Navigation } from "react-native-navigation";
import tw from "../../lib/tailwind";
import DaftarHeader from "../../component/auth/DaftarHeader";
import { BackHandlerDaftar } from "../../component/auth/BackHandler";
import { AddTaggingSheet } from "../../component/auth/BottomSheet";
const Daftar = ({ componentId }) => {
  const [appIsReady, setAppIsReady] = React.useState(false);
  const ourRef = React.useRef(0);
  const [daftar, setDaftar] = React.useState(0);

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
          source={require("../../assets/gif/alamerch.gif")}
          style={{ width: 200, height: 200 }}
        />
      </View>
    );
  }

  return (
    <View style={tw`w-full h-full`}>
      <DaftarPage ourRef={ourRef} daftar={daftar} setDaftar={setDaftar} />
      <DaftarHeader ourRef={ourRef} daftar={daftar} setDaftar={setDaftar} />
      <AddTaggingSheet />
      <BackHandlerDaftar
        ourRef={ourRef}
        componentId={componentId}
        daftar={daftar}
        setDaftar={setDaftar}
      />
    </View>
  );
};

Daftar.options = {
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
          duration: 200,
        },
      },
    },
    pop: {
      waitForRender: true,
      content: {
        alpha: {
          from: 1,
          to: 0,
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

export default Daftar;
