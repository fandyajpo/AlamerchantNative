import { ImageBackground, Dimensions } from 'react-native';
import React, { useState, useContext, useCallback, useEffect, useMemo, useRef } from "react";
import { ProgressChart } from "react-native-chart-kit";
import tw from 'twrnc';

const Chart = React.memo(() => {

  const chartConfig = {
    backgroundGradientFrom: "transparent",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "transparent",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(0, 120, 200, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
    useShadowColorFromDataset: false,
  };
  const screenWidth = Dimensions.get("window").width;
  const data = {
    labels: ["Masuk", "Alpha", "Sakit", "Ijin"],
    data: [0.4, 0.3, 0.1, 0.2],
  };

  return (
    <ImageBackground
      source={require('../../assets/images/blueblue.webp')}
      style={tw`mb-5 overflow-hidden bg-blue-600 pr-6 justify-center items-center mx-3 rounded-md shadow-md border border-white`}
    >
      <ProgressChart
        data={data}
        width={screenWidth}
        height={250}
        strokeWidth={20}
        radius={20}
        chartConfig={chartConfig}
        hideLegend={false}
      />
    </ImageBackground>
  );
});

export default Chart
