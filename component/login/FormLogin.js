
import { useForm, Controller } from "react-hook-form";
import { View, Text, TextInput, TouchableOpacity } from "react-native"
import { Indonesia } from "../../lib/listSvg"

import tw from "../../lib/tailwind"
import { useDeviceContext } from "twrnc";
import React from "react";

import { GlobalContext } from "../../lib/ctx";

const FormLogin = React.memo((props) => {
    useDeviceContext(tw)
    const { state, fnr, logGer, skensaClient, checkerToken } = React.useContext(GlobalContext);
    const { control, register, handleSubmit,
      formState: { errors, isSubmitting, isDirty, isValid }
    } = useForm({
      mode: "onChange",
      defaultValues: {
        uri: 'login',
        username: (__DEV__ ? 'tes_gmedia' : ''),
        password: (__DEV__ ? 'Gmedia123456' : '')
      }
    });
  
    const onSubmit = async(data) => {
      try {
        const login = await skensaClient.post(
          'post',
          data
        );
        await checkerToken(login.data);
      } catch (e) {
        fnr({
          type: 'errMsg',
          payload: (e?.response?.data?.message ? e.response.data.message : "Please check network connection.")
        })
      }
    };
  
    return (
      <>
        <View style={tw`px-4 flex flex-col w-full bg-white/90 rounded-xl border border-gray-300`}>
          <View style={tw`flex w-full py-4 flex-col`}>
            <Text style={tw`text-xl font-bold text-gray-800 text-center`}>Login</Text>
            <Text style={tw`font-bold text-gray-800 text-sm`}>No.Handphone {isSubmitting}</Text>   
          </View>
       <View style={tw``}>
       <Controller
          control={control}
          rules={{
           required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
          <View>
            <View style={tw`flex-row items-center w-full h-auto`}>
             <View style={tw`w-1/5 flex flex-row items-center`}>
              <Indonesia/>
              <Text style={tw`text-xl text-gray-800 text-sm font-bold mx-2 flex items-center justify-center`}>+ 62</Text>
             </View>
             <View style={tw`w-4/5`}>
              <TextInput
                keyboardType="numeric"
                style={tw`p-2 shadow shadow-white bg-white/80 border border-gray-300 w-full rounded-md mb-2 text-base`}
                editable={!isSubmitting}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={"Username"}
              />            
             </View>
            </View>
          </View>
            )}
          name="username"
        />
       </View>
        {errors.username && <Text style={tw`font-normal text-red-900 text-xs`}>This is required.</Text>}
        <View style={tw`h-5 justify-center bg-transparent`}>
          <Text style={tw`${state.errMsg.length < 1 ? 'hidden' : ''} font-normal text-red-900 text-xs`}>{state.errMsg}</Text>
        </View>
      </View>
       
        <View style={tw`w-full flex-row items-center justify-center mt-6 px-2`}>
          <TouchableOpacity style={tw`bg-myellow w-2/4 h-10 rounded-full my-1 flex items-center justify-center`} >
            <Text style={tw`font-bold`}>Kembali</Text>
          </TouchableOpacity>
          <View style={tw`w-4`}/>
          <TouchableOpacity style={tw`bg-mgray w-2/4 h-10 rounded-full my-1 flex items-center justify-center`} >
            <Text style={tw`font-bold text-myellow`}>Login</Text>
          </TouchableOpacity> 
        </View>
      </>
    );
  })

  export default FormLogin



    // React.useEffect(() => {
    //   isHide(isSubmitting)
    //   if (isSubmitting) {
    //     fnr({
    //       type: 'errMsg',
    //       payload: ''
    //     })
    //   }
    // }, [isSubmitting]);