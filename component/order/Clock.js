import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Text, View } from 'react-native';
import tw from 'twrnc';

const Clock = React.memo(() => {

  const [date, setDate] = useState(new Date());
  const refreshClock = useCallback(() => {
    setDate(new Date());
  },[])

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  },[]);

  return (
    <>
    <Text style={tw`text-sm font-semibold text-gray-300`}>{date.toLocaleTimeString()}</Text>
    {useMemo(() => {
      return (
        <Text style={tw`text-xs text-gray-200`}>{date.toLocaleDateString()}</Text>
      )
    },[])}
    </>
  );
})
export default Clock
