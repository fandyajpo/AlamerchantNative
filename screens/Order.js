import { View, ScrollView, Text } from "react-native";
import React from "react";
import SplashScreen from "react-native-splash-screen";

import { GlobalContext } from "../lib/ctx";
import tw from "../lib/tailwind";
import { navOption } from "../lib/ctx";
import { Navigation } from "react-native-navigation";

import { CloseOutlet } from "../lib/listSvg";

import Header from "../component/order/Header";
import ProccessType from "../component/order/ProcessType";
import FlyButton from "../component/order/FlyButton";

import ProcessPage from "../component/order/ProcessPage";

const MemoizeFlyButton = React.memo(FlyButton);

const Order = ({ componentId }) => {
  const { state, fnr, setSecure, getSecure, logGer } =
    React.useContext(GlobalContext);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () =>
          Promise.all([fnr({ type: "screen", payload: "home" })]),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  const [pages, setPages] = React.useState(0);
  const pageRef = React.useRef(null);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <MemoizeFlyButton />
      {React.useMemo(() => {
        return <Header componentId={componentId} />;
      }, [])}
      <ProccessType pageRef={pageRef} pages={pages} setPages={setPages} />
      <View style={tw`flex items-center justify-center h-full w-full pt-44`}>
        <View style={tw`w-full h-full`}>
          <ProcessPage
            pageRef={pageRef}
            setPages={setPages}
            pages={pages}
            componentId={componentId}
          />
        </View>
      </View>
      <View
        style={tw`border-b-2 border-r border-l rounded-full border-gray-300 z-10 w-full absolute bottom-0 w-full h-4 pb-2`}
      ></View>
    </View>
  );
};

export default React.memo(Order);
