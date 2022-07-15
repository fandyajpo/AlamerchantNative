import React from "react";
import { StyleSheet, View } from "react-native";
import PagerView from "react-native-pager-view";
import InputInformasiPemilik from "./InputInformasiPemilik";

const MemoizeInputInformasiPemilik = React.memo(InputInformasiPemilik);
const MemoizeInputInformasiOutlet = React.memo(InputInformasiOutlet);
const MemoizeInputAlamatOutlet = React.memo(InputAlamatOutlet);

const DaftarPage = ({ ourRef, daftar }) => {
  const onPageSelected = React.useCallback(
    (e) => {
      ourRef.current.setPage(daftar);
    },
    [daftar]
  );

  return (
    <PagerView
      style={styles.pagerView}
      initialPage={0}
      ref={ourRef}
      onPageSelected={onPageSelected}
    >
      <View>
        <MemoizeInputInformasiPemilik />
      </View>
      <View style={tw`bg-gray-400 w-full h-full`}></View>
      <View style={tw`bg-gray-500 w-full h-full`}></View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default DaftarPage;
