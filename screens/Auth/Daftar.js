import React from "react";
import { View } from "react-native";
import DaftarPage from "../../component/auth/DaftarPage";
import tw from "../../lib/tailwind";
import DaftarHeader from "../../component/auth/DaftarHeader";
import { BackHandlerDaftar } from "../../component/auth/BackHandler";
import { AddTaggingSheet } from "../../component/auth/BottomSheet";
const Daftar = ({ componentId }) => {
  const ourRef = React.useRef(0);
  const [daftar, setDaftar] = React.useState(0);

  return (
    <View style={tw`w-full h-full`}>
      <DaftarPage ourRef={ourRef} daftar={daftar} setDaftar={setDaftar} />
      <DaftarHeader ourRef={ourRef} daftar={daftar} setDaftar={setDaftar} />
      <AddTaggingSheet ourRef={ourRef} />
      <BackHandlerDaftar
        componentId={componentId}
        ourRef={ourRef}
        daftar={daftar}
        setDaftar={setDaftar}
      />
    </View>
  );
};

export default Daftar;
