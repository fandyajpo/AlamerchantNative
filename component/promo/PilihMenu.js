import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PagerView from "react-native-pager-view";
import { Check } from "../../lib/listSvg";
import tw from "../../lib/tailwind";

const PilihMenuPromo = ({ MenuCategory, menuRef, menu, setMenu }) => {
  const onPageSelected = (e) => setMenu(e.nativeEvent.position);

  return (
    <PagerView
      ref={menuRef}
      style={{ flex: 1 }}
      initialPage={0}
      scrollEnabled={true}
      orientation={"vertical"}
      onPageSelected={onPageSelected}
    >
      {MenuCategory.length > 0 &&
        MenuCategory.map((m, i) => {
          return (
            <View key={i}>
              <ScrollView
                contentContainerStyle={tw`bg-white px-2 mt-13 pb-46`}
                showsVerticalScrollIndicator={false}
              >
                <Text style={tw`text-gray-800 text-xl font-bold my-2`}>
                  {m.type}
                </Text>
                {m.product.length > 0 &&
                  m.product.map((p, i) => {
                    console.log(p.variant);
                    return (
                      <View
                        key={i}
                        style={tw`bg-white border border-gray-300 w-full rounded-xl mb-2`}
                      >
                        <View
                          style={tw`flex-row items-center p-2 items-center justify-between`}
                        >
                          <View style={tw`flex-row items-center`}>
                            <View
                              style={tw`bg-black w-16 h-16 rounded-xl mr-2`}
                            />
                            {p.price && (
                              <View
                                style={tw`flex-row items-center justify-between`}
                              >
                                <View style>
                                  <Text
                                    style={tw`text-gray-800 text-sm font-bold`}
                                  >
                                    {p.name}
                                  </Text>
                                  <Text style={tw`text-black`}>Ngentoy</Text>
                                </View>
                                <View style={tw``}>
                                  <Check />
                                </View>
                              </View>
                            )}
                          </View>
                        </View>
                      </View>
                    );
                  })}
              </ScrollView>
            </View>
          );
        })}
    </PagerView>
  );
};

export default PilihMenuPromo;

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
