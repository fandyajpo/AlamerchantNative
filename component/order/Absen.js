import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Text, FlatList, View, Pressable, Image, RefreshControl, ScrollView, ImageBackground, Dimensions, Animated } from 'react-native';
import tw from 'twrnc';

const Absen = React.memo(() => {

  // const [date, setDate] = useState(new Date());
  // const refreshClock = useCallback(() => {
  //   setDate(new Date());
  // },[])
  //
  // useEffect(() => {
  //   const timerId = setInterval(refreshClock, 1000);
  //   return function cleanup() {
  //     clearInterval(timerId);
  //   };
  // },[]);

  useEffect(() => {
    console.log("Absen rerender.");
  })

  return (
    <View
      style={[
        tw`p-4 rounded-lg overflow-hidden absolute z-10 w-full top-[0.4rem]`,
        // { flex: 1 }
      ]}
    >
      <View
        style={[
          tw`h-[9rem] `,
          {
            // shadowColor: '#171717',
            // shadowOffset: {width: -2, height: 4},
            // shadowOpacity: 0.2,
            // shadowRadius: 3,
           }
        ]}
      >

        <View
          style={[
            tw`h-[5.3rem] items-center flex-row`,
            // tw`h-[5.3rem] items-center flex-row border-b border-gray-100`,
            // { flex: 1 }
          ]}
        >

          <View
            style={[
              tw`w-[4.5rem] h-[4.5rem] flex-none bg-transparent justify-center overflow-hidden rounded-lg`,
              // { flex: 1 }
            ]}
          >
            <Image
              style={[
                tw`rounded-full`,
                {
                flex: 1,
                width: '100%',
                height: undefined,
                width: undefined,
                resizeMode: 'contain',
                backgroundColor: 'white'
                }
              ]}
              source={
                  require('../../assets/images/loadingBall.gif')
              }
              resizeMode={"cover"}
            />
          </View>

          <View
            style={[
              tw`w-[0.8rem] h-[3rem] mr-[0.8rem] border-r border-gray-50`,
              // { flex: 1 }
            ]}
          />

            <View
              style={[
                tw`h-full mr-2 justify-center`,
                // { flex: 1 }
              ]}
            >
              <Text
                style={[
                  tw`text-xs font-semibold text-white`
                ]}
              >
                Lokasi
              </Text>
              <Text
                style={[
                  tw`text-sm font-semibold text-white`
                ]}
              >
                Datang
              </Text>
              <Text
                style={[
                  tw`text-sm font-semibold text-white`
                ]}
              >
                Pulang
              </Text>
            </View>

            <View
              style={[
                tw`h-full mr-2 justify-center`,
                // { flex: 1 }
              ]}
            >
              <Text
                style={[
                  tw`text-sm font-bold text-white`
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  tw`text-sm font-bold text-white`
                ]}
              >
                :
              </Text>
              <Text
                style={[
                  tw`text-sm font-bold text-white`
                ]}
              >
                :
              </Text>
            </View>

            <View
              style={[
                tw`h-full mr-2 justify-center`,
                { flex: 1 }
              ]}
            >
              <Text
                numberOfLines={1}
                style={[
                  tw`text-xs font-semibold text-white`
                ]}
              >
                Jalan Gunung Andakasa Lucky Square Kav G
              </Text>
              <Text
                style={[
                  tw`text-sm font-semibold text-white`
                ]}
              >
                07:30
              </Text>
              <Text
                style={[
                  tw`text-sm font-semibold text-white`
                ]}
              >
                16:00
              </Text>
            </View>

        </View>

        <View
          style={[
            tw`h-[3.7rem] flex flex-row items-center`,
          ]}
        >

          <View style={[
            tw`w-full h-full justify-center`,
            { flex: 1 }
          ]}>

              <Pressable
                // onPress={() => hapus()}
                style={[
                  tw`h-[2.5rem] bg-white shadow rounded flex flex-row items-center justify-center`,
                ]}
              >
                {/*<MaterialCommunityIcons name="face-recognition" size={16} color="black" />*/}
                <Text style={tw`text-gray-500 font-bold text-xs`}>Absen Datang</Text>
              </Pressable>

          </View>

          <View style={[
            tw`my-1 w-[1rem] h-full`,
            // { flex: 1, backgroundColor: 'red'}
          ]}>
          </View>

          <View style={[
            tw`w-full h-full justify-center`,
            { flex: 1 }
          ]}>

              <Pressable
                // onPress={() => hapus()}
                style={[
                  tw`h-[2.5rem] bg-white shadow rounded flex flex-row items-center justify-center`,
                  // { flex: 1 }
                ]}
              >
                {/*<MaterialCommunityIcons name="face-recognition" size={16} color="black" />*/}
                <Text style={tw`text-gray-500 font-bold text-xs`}>Absen Pulang</Text>
              </Pressable>

          </View>

        </View>


      </View>
    </View>
  );
})
export default Absen
