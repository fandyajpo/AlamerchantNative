import React from "react";
import PilihMenuPromo from "../../component/promo/PilihMenu";
import PilihMenuSwitch from "../../component/promo/PilihMenuSwitch";
import { BackHandlerPilihMenu } from "../../component/promo/BackHandler";
import { View } from "react-native";
import tw from "../../lib/tailwind";

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

  return (
    <>
      <View style={tw`h-full flex-row`}>
        <View style={[{ flex: 0.25 }, tw`w-full h-full`]}>
          <PilihMenuSwitch
            MenuCategory={MenuCategory}
            menuRef={menuRef}
            menu={menu}
            setMenu={setMenu}
          />
        </View>
        <View style={[{ flex: 1 }, tw`w-full h-full `]}>
          <PilihMenuPromo
            MenuCategory={MenuCategory}
            menuRef={menuRef}
            menu={menu}
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
