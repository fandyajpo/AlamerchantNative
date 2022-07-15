import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PagerView from "react-native-pager-view";
import tw from "../../lib/tailwind";
import InputInformasiPemilik from "./InputInformasiPemilik";
import InputInformasiOutlet from "./InputInformasiOutlet";
import InputAlamatOutlet from "./InputAlamatOutlet";
const DaftarPage = ({ ourRef }) => {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <InputInformasiPemilik />
      </View>
      <View key="2">
        <InputInformasiOutlet ourRef={ourRef} />
      </View>
      <View key="3">
        <InputAlamatOutlet />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default DaftarPage;
