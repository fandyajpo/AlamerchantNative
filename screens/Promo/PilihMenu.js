import React from "react";
import PilihMenuPromo from "../../component/promo/PilihMenu";
import PilihMenuSwitch from "../../component/promo/PilihMenuSwitch";
import { BackHandlerPilihMenu } from "../../component/promo/BackHandler";
import { View, Image } from "react-native";
import tw from "../../lib/tailwind";
import { Navigation } from "react-native-navigation";

const MemoizePilihMenuSwitch = React.memo(PilihMenuSwitch);
const MemoizePilihMenuPromo = React.memo(PilihMenuPromo);

const MenuCategory = [
  {
    type: "All",
    product: [
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        variant: [
          { nama: "Nasi Goreng Jakarta", price: "25.000" },
          { nama: "Nasi Goreng Lombok", price: "25.000" },
          { nama: "Nasi Goreng Bali", price: "25.000" },
        ],
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
      {
        name: "Nasi Goreng",
        price: "20.000",
      },
    ],
  },
  {
    type: "Coffee",
    product: [
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
    ],
  },
  {
    type: "Indonesian Food",
    product: [
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
      {
        name: "Espreswwwo",
        price: "35.000",
      },
    ],
  },
  {
    type: "Small Bite",
    product: [
      {
        name: "Espreswwwo",
        price: "35.000",
      },
    ],
  },
  {
    type: "Salad",
    product: [
      {
        name: "Espreswwwo",
        price: "35.000",
      },
    ],
  },
  {
    type: "Flavoured Ice Tea",
    product: [
      {
        name: "Espreswwwo",
        price: "35.000",
      },
    ],
  },
];

const PilihMenu = ({ componentId }) => {
  const menuRef = React.useRef(0);
  const [menu, setMenu] = React.useState(0);

  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 500));
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
          source={require("./../../assets/gif/alamerch.gif")}
          style={{ width: 100, height: 100 }}
        />
      </View>
    );
  }

  return (
    <>
      <View style={tw`h-full flex-row`}>
        <View style={[{ flex: 0.25 }, tw`w-full h-full`]}>
          <MemoizePilihMenuSwitch
            MenuCategory={MenuCategory}
            menuRef={menuRef}
            menu={menu}
            setMenu={setMenu}
          />
        </View>
        <View style={[{ flex: 1 }, tw`w-full h-full `]}>
          <MemoizePilihMenuPromo
            MenuCategory={MenuCategory}
            menuRef={menuRef}
            setMenu={setMenu}
          />
        </View>
      </View>
      <View style={tw`bg-white/90 absolute  h-13 w-full top-0`} />
      <BackHandlerPilihMenu componentId={componentId} />
    </>
  );
};

PilihMenu.options = {
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

export default PilihMenu;
