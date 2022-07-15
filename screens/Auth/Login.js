import React from "react";
import { Navigation } from "react-native-navigation";
import SplashScreen from "react-native-splash-screen";
import tw from "../../lib/tailwind";
import { Alamerchant, IndonesiaFlag } from "../../lib/listSvg";
import { GlobalContext } from "../../lib/ctx";
import { useForm, Controller } from "react-hook-form";
import { BackRoute, PushRoute } from "../../lib/ctx";

const image = require("../assets/images/loginBackground.png");
const logImage = require("../assets/images/loginImage.png");

import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  Pressable,
} from "react-native";
import { Loading } from "../../component/default";

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const FormLogin = React.memo(({ isHide, componentId }) => {
  const { state, fnr, logGer, skensaClient, checkerToken } =
    React.useContext(GlobalContext);
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      uri: "login",
      username: __DEV__ ? "0492034943943" : "",
      // password: __DEV__ ? "123" : "",
    },
  });

  React.useEffect(() => {
    isHide(isSubmitting);
    if (isSubmitting) {
      fnr({
        type: "errMsg",
        payload: "",
      });
    }
  }, [isSubmitting]);

  const onSubmit = async (data) => {
    try {
      const login = await skensaClient.post("post", data);
      await checkerToken(login.data);
    } catch (e) {
      fnr({
        type: "errMsg",
        payload: e?.response?.data?.message
          ? e.response.data.message
          : "Please check network connection.",
      });
    }
  };

  return (
    <View
      style={tw`flex flex-col w-full bg-white border rounded-xl p-3 border-gray-300`}
    >
      <Text style={tw`text-gray-800 text-xl font-bold text-center`}>Login</Text>
      <View style={tw`flex w-full py-1 items-center flex-row justify-between`}>
        <Text style={tw`w-2/4 font-bold text-gray-800 text-sm`}>
          No. Handphone {isSubmitting}
        </Text>
        <View>
          {errors.username && (
            <Text style={tw`font-normal text-red-900 text-xs`}>
              This is required.
            </Text>
          )}
        </View>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View style={tw`flex-row items-center`}>
            <View style={tw`flex-row items-center`}>
              <IndonesiaFlag />
              <Text style={tw`text-gray-800 font-bold text-sm px-2`}>+ 62</Text>
            </View>

            <View style={{ flex: 1 }}>
              <TextInput
                keyboardType="phone-pad"
                style={tw`p-2 w-full shadow shadow-white bg-mgray border border-gray-300 rounded-md text-base`}
                editable={!isSubmitting}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={"Username"}
              />
            </View>
          </View>
        )}
        name="username"
      />

      <View style={tw`h-5 justify-center bg-transparent`}>
        <Text
          style={tw`${
            state.errMsg.length < 1 ? "hidden" : ""
          } font-normal text-red-900 text-xs`}
        >
          {state.errMsg}
        </Text>
      </View>

      <View style={tw`flex flex-row justify-end w-full`}>
        {/* <Pressable
          disabled={isSubmitting}
          // onPress={handleSubmit(onSubmit)}
          onPress={handleSubmit(onSubmit)}
          style={tw`bg-blue-900 border border-white p-4 rounded-md flex items-center justify-center w-full`}
        >
          <Text style={tw`text-white font-bold`}>Login</Text>
        </Pressable> */}
        <View style={tw`flex-row items-center justify-between px-4`}>
          <Pressable
            activeOpacity={0.5}
            style={tw`w-2/4`}
            onPress={() => BackRoute(componentId)}
          >
            <View
              style={tw`w-full bg-myellow h-10 sm:h-12 rounded-full flex items-center justify-center`}
            >
              <Text style={tw`text-sm font-bold text-white`}>Batal</Text>
            </View>
          </Pressable>
          <View style={tw`w-4`} />
          <Pressable
            activeOpacity={0.5}
            style={tw`w-2/4`}
            onPress={() => PushRoute(componentId, "Otp")}
          >
            <View
              style={tw`w-full bg-mgray h-10 sm:h-12 rounded-full flex items-center justify-center`}
            >
              <Text style={tw`text-sm font-bold text-myellow`}>Login</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </View>
  );
});

const Login = ({ componentId }) => {
  const { state, fnr, setSecure } = React.useContext(GlobalContext);
  const [isHidden, setIsHidden] = React.useState(false);
  const isHide = React.useCallback((r) => {
    setIsHidden(r);
  }, []);

  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () => setSecure("screen", "login"),
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  return (
    <View style={[styles.root, tw`bg-white`]}>
      <View style={tw`absolute top-0 left-0`}>
        <Alamerchant />
      </View>
      <Loading isHidden={isHidden} />

      <View style={tw`w-full h-full flex justify-center`}>
        <KeyboardAvoidingView
          {...(Platform.OS === "ios" && { behavior: "padding" })}
          style={tw`px-4`}
        >
          <FormLogin isHide={isHide} componentId={componentId} />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};
export default Login;

Login.options = {
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

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
  },
});

// import React, { useContext, useEffect, useState } from "react";
// import { Navigation } from "react-native-navigation";
// import SplashScreen from "react-native-splash-screen";
// import tw from "../lib/tailwind";
// import { GlobalContext } from "../lib/ctx";
// import {
//   View,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
//   Text,
// } from "react-native";
// import { Market, Alamerchant } from "../lib/listSvg";

// import FormLogin from "../component/login/FormLogin";
// import { navOption } from "../lib/ctx";

// export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// const Login = ({ componentId }) => {
//   const { state, fnr, setSecure } = useContext(GlobalContext);
//   const [isHidden, setIsHidden] = useState(false);
//   const isHide = React.useCallback((r) => {
//     setIsHidden(r);
//   }, []);

//   // useEffect(() => {
//   //   SplashScreen.hide();
//   // }, []);

//   React.useEffect(() => {
//     const unsubscribe = Navigation.events().registerComponentListener(
//       {
//         componentDidAppear: () => setSecure("screen", "login"),
//         componentDidDisappear: () =>
//           console.log(`componentDidDisappear ${componentId}`),
//       },
//       componentId
//     );
//     return () => unsubscribe.remove();
//   }, [componentId]);

//   return (
//     <View style={styles.root}>
//       <View style={tw`absolute top-0 left-0`}>
//         <Alamerchant />
//       </View>
//       <View style={tw`absolute -right-52`}>
//         <Market />
//       </View>
//       <View style={tw`w-full h-full flex justify-center px-4`}>
//         <KeyboardAvoidingView
//           {...(Platform.OS === "ios" && { behavior: "padding" })}
//         >
//           <FormLogin isHide={isHide} />
//         </KeyboardAvoidingView>
//       </View>
//     </View>
//   );
// };
// export default Login;

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "white",
//   },
// });
