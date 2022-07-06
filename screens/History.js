import { StyleSheet, View } from "react-native";
import React from "react";
import { Navigation } from "react-native-navigation";
import HistoryPage from "../component/history/HistoryPage";
import { GlobalContext } from "../lib/ctx";
import tw from "../lib/tailwind";
import Header from "../component/history/Header";
import PendapatanBersih from "../component/history/PendapatanBersih";
import FilterTime from "../component/history/FilterTime";
const History = ({ componentId }) => {
  const { state, fnr, setSecure } = React.useContext(GlobalContext);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () => {
          fnr({ type: "screen", payload: "history" });
        },
        componentDidDisappear: () =>
          console.log(`componentDidDisappear ${componentId}`),
      },
      componentId
    );
    return () => unsubscribe.remove();
  }, [componentId]);

  const [type, setType] = React.useState(0);
  const typeRef = React.useRef(null);

  React.useEffect(() => {
    console.log("aa");
  });

  return (
    <View style={[styles.root, tw`bg-mgray`]}>
      {React.useMemo(() => {
        return <Header typeRef={typeRef} type={type} setType={setType} />;
      }, [type])}
      <View
        style={tw`mt-30 top-26 px-2 py-2 w-full  items-center justify-center`}
      >
        <PendapatanBersih />
      </View>
      <View
        style={tw`flex items-center justify-center h-full w-full pt-25 pb-14`}
      >
        <View style={tw`w-full h-full `}>
          <HistoryPage typeRef={typeRef} type={type} setType={setType} />
        </View>
      </View>

      <FilterTime />
    </View>
  );
};

export default React.memo(History);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
