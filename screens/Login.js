// import React, { useContext, useEffect, useMemo, useState } from 'react';
// import { Navigation } from 'react-native-navigation';
// import SplashScreen from 'react-native-splash-screen'
// import tw from 'twrnc';
// import axios from "axios";
// import { GlobalContext } from '../lib/ctx'
// import { useForm, Controller } from "react-hook-form";

// const image = require('../assets/images/loginBackground.png');
// const logImage = require('../assets/images/loginImage.png');

// import { View, Text, Button, StyleSheet, Image, KeyboardAvoidingView, Platform, TextInput, Pressable } from 'react-native';
// import { Loading } from '../component/default';

// export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// const FormLogin = React.memo(({isHide}) => {

//   const { state, fnr, logGer, skensaClient, checkerToken } = useContext(GlobalContext);

//   const { control, register, handleSubmit,
//     formState: { errors, isSubmitting, isDirty, isValid }
//   } = useForm({
//     mode: "onChange",
//     defaultValues: {
//       uri: 'login',
//       username: (__DEV__ ? 'tes_gmedia' : ''),
//       password: (__DEV__ ? 'Gmedia123456' : '')
//     }
//   });

//   React.useEffect(() => {
//     isHide(isSubmitting)
//     if (isSubmitting) {
//       fnr({
//         type: 'errMsg',
//         payload: ''
//       })
//     }
//   }, [isSubmitting]);

//   const onSubmit = async(data) => {
//     try {
//       const login = await skensaClient.post(
//         'post',
//         data
//       );
//       await checkerToken(login.data);
//     } catch (e) {
//       fnr({
//         type: 'errMsg',
//         payload: (e?.response?.data?.message ? e.response.data.message : "Please check network connection.")
//       })
//     }
//   };

//   return (
//     <View style={tw`px-4 flex flex-col w-full`}>
//       <View style={tw`flex w-full py-1 items-center flex-row justify-between`}>
//         <Text style={tw`w-2/4 font-bold text-blue-900 text-sm`}>Username {isSubmitting}</Text>
//         <View>
//           {errors.username && <Text style={tw`font-normal text-red-900 text-xs`}>This is required.</Text>}
//         </View>
//       </View>
//       <Controller
//         control={control}
//         rules={{
//          required: true,
//         }}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             style={tw`p-3 shadow shadow-white bg-white/80 border border-gray-300 rounded-md mb-2 text-base`}
//             editable={!isSubmitting}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             placeholder={"Username"}
//           />
//         )}
//         name="username"
//       />

//       <View style={tw`flex w-full py-1 items-center flex-row justify-between`}>
//         <Text style={tw`w-2/4 font-bold text-blue-900 text-sm`}>Password</Text>
//         <View>
//           {errors.password && <Text style={tw`font-normal text-red-900 text-xs`}>This is required.</Text>}
//         </View>
//       </View>
//       <Controller
//         control={control}
//         rules={{
//          required: true,
//         }}
//         render={({ field: { onChange, onBlur, value } }) => (
//           <TextInput
//             style={tw`p-3 shadow shadow-white bg-white/80 border border-gray-300 rounded-md mb-2 text-base`}
//             editable={!isSubmitting}
//             secureTextEntry={true}
//             onBlur={onBlur}
//             onChangeText={onChange}
//             value={value}
//             placeholder={"Password"}
//           />
//         )}
//         name="password"
//       />

//       <View style={tw`h-5 justify-center bg-transparent`}>
//         <Text style={tw`${state.errMsg.length < 1 ? 'hidden' : ''} font-normal text-red-900 text-xs`}>{state.errMsg}</Text>
//       </View>

//       <View style={tw`flex flex-row justify-end w-full`}>
//         <Pressable
//           disabled={isSubmitting}
//           onPress={handleSubmit(onSubmit)}
//           style={tw`bg-blue-900 border border-white p-4 rounded-md flex items-center justify-center w-full`}
//         >
//             <Text style={tw`text-white font-bold`}>Login</Text>
//         </Pressable>
//       </View>
//     </View>
//   );

// })

// const Login = ({componentId}) => {

//   const { state, fnr, setSecure } = useContext(GlobalContext);
//   const [isHidden, setIsHidden] = useState(false);
//   const isHide = React.useCallback((r) => {
//     setIsHidden(r)
//   },[])

//   useEffect(()=>{
//     SplashScreen.hide();
//   },[]);

//   React.useEffect(() => {
//     const unsubscribe = Navigation.events().registerComponentListener(
//       {
//         componentDidAppear: () => setSecure('screen', 'login'),
//         componentDidDisappear: () => console.log(`componentDidDisappear ${componentId}`),
//       },
//       componentId,
//     );
//     return () => unsubscribe.remove();
//   },[componentId]);

//   return (
//     <View style={styles.root}>
//       <Loading isHidden={isHidden} />
//       <View style={tw`w-full h-22 bg-blue-900 absolute top-0 z-10 flex justify-end`}>
//         <Text style={tw`text-white font-bold text-lg px-4 py-3`}>Login</Text>
//       </View>
//       <Image source={image} resizeMode="cover" style={tw`absolute w-full bg-transparent`} />
//       <Image source={logImage} resizeMode="cover" style={tw`absolute bottom-0 w-full bg-transparent`} />

//       <View style={tw`w-full h-full flex justify-center`}>
//         <KeyboardAvoidingView
//           style={tw``}
//           {...(Platform.OS === 'ios' && { behavior: 'padding' })}
//         >
//           <FormLogin isHide={isHide} />
//         </KeyboardAvoidingView>
//       </View>
//     </View>
//   );
// }
// export default Login

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'whitesmoke'
//   }
// });


import React, { useContext, useEffect, useState } from 'react';
import { Navigation } from 'react-native-navigation';
import SplashScreen from 'react-native-splash-screen'
import tw from "../lib/tailwind";
import { GlobalContext } from '../lib/ctx'
import { View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity, Text } from 'react-native';
import { Market, Alamerchant } from "../lib/listSvg"

import FormLogin from "../component/login/FormLogin"
import { navOption } from '../lib/ctx';

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const Login = ({componentId}) => {

  const { state, fnr, setSecure } = useContext(GlobalContext);
  const [isHidden, setIsHidden] = useState(false);
  const isHide = React.useCallback((r) => {
    setIsHidden(r)
  }, [])

  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);

  React.useEffect(() => {
    const unsubscribe = Navigation.events().registerComponentListener(
      {
        componentDidAppear: () => setSecure('screen', 'login'),
        componentDidDisappear: () => console.log(`componentDidDisappear ${componentId}`),
      },
      componentId,
    );
    return () => unsubscribe.remove();
  },[componentId]);

  return (
    <View style={styles.root}>
       <View style={tw`absolute top-0 left-0`}>
          <Alamerchant/>
        </View>
        <View style={tw`absolute -right-52`}>
          <Market/>
        </View>
      <View style={tw`w-full h-full flex justify-center px-4`}>
        <KeyboardAvoidingView {...(Platform.OS === 'ios' && { behavior: 'padding' })}>
           <FormLogin isHide={isHide} />  
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}
export default Login

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  }
});
