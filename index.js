/**
 * @format
 */
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Navigation } from "react-native-navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
// import { MMKV } from 'react-native-mmkv'
// const storage = new MMKV()
import { storage } from "./lib/strg";
import { GlobalContext, GlobalProvider } from "./lib/ctx";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { GlobalPortal } from "./lib/sheet";

import EnterScreen from "./screens/EnterApp";
import LoginScreen from "./screens/Login";
import HomeScreen from "./screens/Order";
import HistoryScreen from "./screens/History";
import FeedScreen from "./screens/Feed";
import PromoScreen from "./screens/Promo";
import ProfileScreen from "./screens/Profile";
import MerchantStatusScreen from "./screens/MerchantStatus";
import FollowersScreen from "./screens/Followers";
import CameraScreen from "./screens/Camera";
import CommentScreen from "./screens/SeeComment";
import OrderDetalScreen from "./screens/OrderDetail";
import SettingScreen from "./screens/Setting";

Navigation.registerComponent(
  "Setting",
  () => (props) =>
    (
      <GlobalProvider>
        <SettingScreen {...props} />
      </GlobalProvider>
    ),
  () => SettingScreen
);

Navigation.registerComponent(
  "OrderDetail",
  () => (props) =>
    (
      <GlobalProvider>
        <OrderDetalScreen {...props} />
      </GlobalProvider>
    ),
  () => OrderDetalScreen
);

Navigation.registerComponent(
  "Comment",
  () => (props) =>
    (
      <GlobalProvider>
        <CommentScreen {...props} />
      </GlobalProvider>
    ),
  () => CommentScreen
);

Navigation.registerComponent(
  "Followers",
  () => (props) =>
    (
      <GlobalProvider>
        <FollowersScreen {...props} />
      </GlobalProvider>
    ),
  () => FollowersScreen
);

Navigation.registerComponent(
  "Enter",
  () => (props) =>
    (
      <GlobalProvider>
        <EnterScreen {...props} />
      </GlobalProvider>
    ),
  () => EnterScreen
);

Navigation.registerComponent(
  "Login",
  () => (props) =>
    (
      <GlobalProvider>
        <LoginScreen {...props} />
      </GlobalProvider>
    ),
  () => LoginScreen
);

Navigation.registerComponent(
  "Order",
  () => (props) =>
    (
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomSheetModalProvider>
            <GlobalProvider>
              <HomeScreen {...props} />
            </GlobalProvider>
          </BottomSheetModalProvider>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    ),
  () => HomeScreen
);

Navigation.registerComponent(
  "History",
  () => (props) =>
    (
      <GlobalProvider>
        <HistoryScreen {...props} />
      </GlobalProvider>
    ),
  () => HistoryScreen
);

Navigation.registerComponent(
  "Feed",
  () => (props) =>
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GlobalProvider>
          <FeedScreen {...props} />
        </GlobalProvider>
      </GestureHandlerRootView>
    ),
  () => FeedScreen
);

Navigation.registerComponent(
  "Promo",
  () => (props) =>
    (
      <GlobalProvider>
        <PromoScreen {...props} />
      </GlobalProvider>
    ),
  () => PromoScreen
);

Navigation.registerComponent(
  "Profile",
  () => (props) =>
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GlobalProvider>
          <ProfileScreen {...props} />
        </GlobalProvider>
      </GestureHandlerRootView>
    ),
  () => ProfileScreen
);

Navigation.registerComponent(
  "MerchantStatus",
  () => (props) =>
    (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <GlobalProvider>
          <MerchantStatusScreen {...props} />
        </GlobalProvider>
      </GestureHandlerRootView>
    ),
  () => MerchantStatusScreen
);

Navigation.registerComponent("Camera", () => CameraScreen);

Navigation.setDefaultOptions({
  topBar: {
    title: {},
    visible: false,
    drawBehind: false,
    subtitle: {},
    backButton: {},
    background: {},
  },
  statusBar: {
    drawBehind: true,
    style: "dark",
    backgroundColor: "rgba(0,0,0,0)",
    animate: true,
  },
  bottomTabs: {
    titleDisplayMode: "alwaysShow",
    backgroundColor: "#F4F7FA",
  },
  bottomTab: {
    iconColor: "#8a8a8a",
    selectedIconColor: "#F3B33D",
    textColor: "#8a8a8a",
    selectedTextColor: "#F3B33D",
    fontSize: 10,
    selectedFontSize: 12,
  },
  animations: {
    push: {
      waitForRender: true,
      content: {
        x: {
          from: -1000,
          to: 0,
          duration: 300,
        },
        alpha: {
          from: 0.5,
          to: 1,
          duration: 300,
        },
      },
    },
    //   setRoot: {
    //     enter: {
    //       waitForRender: true,
    //       enabled: false,
    //       // translationY: {
    //       //   from: 0,
    //       //   to: 1,
    //       //   duration: 3,
    //       // },
    //     },
    //   },
  },
});

const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: { name: "Order", id: "ORDER_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Order",
                icon: require("./assets/icons/25/home.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "History", id: "HISTORY_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "History",
                icon: require("./assets/icons/25/mockup.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Feed", id: "FEED_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Feed",
                icon: require("./assets/icons/25/stories.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Promo", id: "PROMO_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Promo",
                icon: require("./assets/icons/25/user.png"),
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: { name: "Profile", id: "PROFILE_SCREEN" },
              },
            ],
            options: {
              bottomTab: {
                text: "Profile",
                icon: require("./assets/icons/25/user.png"),
              },
            },
          },
        },
      ],
    },
    stack: {
      children: [
        {
          component: {
            name: "MerchantStatus",
            passProps: {
              text: "Merchant status screen",
            },
          },
        },
        {
          component: {
            name: "Camera",
            passProps: {
              text: "Camera screen",
            },
          },
        },
        {
          component: {
            name: "Followers",
            passProps: {
              text: "Followers screen",
            },
          },
        },
        {
          component: {
            name: "Comment",
            passProps: {
              text: "Followers screen",
            },
          },
        },
        {
          component: {
            name: "Setting",
            passProps: {
              text: "Setting screen",
            },
          },
        },
      ],
    },
  },
};

const loginRoot = {
  root: {
    component: {
      name: "Login",
      options: {
        statusBar: {
          drawBehind: true,
          backgroundColor: "transparent",
          animate: false,
        },
      },
    },
  },
};

const enterApp = {
  root: {
    component: {
      name: "Enter",
      options: {
        statusBar: {
          drawBehind: true,
          backgroundColor: "transparent",
          animate: false,
        },
      },
    },
  },
};

const listener = storage.addOnValueChangedListener(async (changedKey) => {
  const [token, screen] = await Promise.all([
    storage.contains("token"),
    storage.contains("screen"),
  ]);
  if (token && screen) {
    Navigation.setRoot(loginRoot);
  }
});

function isLoggedIn(vals) {
  storage.delete("screen");
  // storage.clearAll()
  const tok = storage.contains("token");
  return tok;
}

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot(mainRoot);
  //mainRoot
});
