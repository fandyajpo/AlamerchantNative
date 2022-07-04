import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen'

import tw from '../lib/tailwind';
import { GlobalContext } from '../lib/ctx'
import { navOption } from '../lib/ctx';

import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Market, Alamerchant } from "../lib/listSvg"

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Enter = (props) => {


  useEffect(()=>{
    SplashScreen.hide();
  },[]);

  return (
    <View style={styles.root}>
        <View style={tw`absolute top-0 left-0`}>
          <Alamerchant/>
        </View>
        <View style={tw`absolute right-0`}>
          <Market/>
        </View>
      <View style={tw`w-full px-4 flex-col absolute bottom-10`}>
        <View style={tw`pb-8 mb-6`}>
          <Text style={tw`text-gray-800 text-center text-xl font-bold`}>Selamat Datang!</Text>
          <Text style={tw`text-gray-800 text-center`}>Bergabung jadi Outlet di aplikasi masa depan</Text>
        </View>
        <TouchableOpacity style={tw`bg-myellow w-full h-12 rounded-full my-2 flex items-center justify-center`}
          onPress={() => Navigation.push(props.componentId, {
           component: {
            name: 'Profile',
            options: (Platform.OS !== 'ios' && navOption)
          }
        })}
        >
            <Text style={tw`font-bold `}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`bg-mgray w-full h-12 rounded-full my-2 flex items-center justify-center`}>
            <Text style={tw`font-bold text-myellow`}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Enter

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whiter'
  }
});