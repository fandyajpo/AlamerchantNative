import React from "react";
import { View, Text, ScrollView } from "react-native";
import DefaultBackHandlerComponent from "../../component/defaultBackHandler";
import tw from "../../lib/tailwind";
import { RadioButton } from "react-native-paper";
import { LanguageSheet } from "../../component/setting/SettingSheet";

const MemoizeLanguageSheet = React.memo(({ langRef, lang, setLang }) => {
  return <LanguageSheet langRef={langRef} lang={lang} setLang={setLang} />;
});

const Language = ({ componentId }) => {
  const langRef = React.useRef(null);
  const [lang, setLang] = React.useState("bahasa");
  return (
    <View style={tw`w-full h-full bg-white pt-13`}>
      <ScrollView contentContainerStyle={tw`pb-32  h-full`}>
        <View style={tw`p-2`}>
          <View
            style={tw`flex-row items-center justify-between border p-2 border-gray-200 rounded-md mb-2`}
          >
            <View style={tw`flex-row items-center`}>
              <View style={tw`bg-red-500 w-5 h-5 rounded-full`} />
              <Text style={tw`text-sm text-gray-800 ml-2 font-bold`}>
                Indonesia
              </Text>
            </View>
            <RadioButton
              value={lang}
              color="#F3B33D"
              status={lang === "bahasa" ? "checked" : "unchecked"}
              onPress={lang !== "bahasa" ? () => langRef.current.show() : null}
              uncheckedColor={"#9ca3af"}
              //   disabled={lang === "bahasa"}
            />
          </View>
          <View
            style={tw`flex-row items-center justify-between border p-2 border-gray-200 rounded-md`}
          >
            <View style={tw`flex-row items-center`}>
              <View style={tw`bg-red-500 w-5 h-5 rounded-full`} />
              <Text style={tw`text-sm text-gray-800 ml-2 font-bold`}>
                English
              </Text>
            </View>
            <RadioButton
              value={lang}
              color="#F3B33D"
              status={lang === "english" ? "checked" : "unchecked"}
              onPress={lang !== "english" ? () => langRef.current.show() : null}
              uncheckedColor={"#9ca3af"}
              //   disabled={lang === "english"}
            />
          </View>
        </View>
      </ScrollView>
      <MemoizeLanguageSheet langRef={langRef} lang={lang} setLang={setLang} />
      <DefaultBackHandlerComponent componentId={componentId} title={"Bahasa"} />
    </View>
  );
};

Language.options = {
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

export default Language;
