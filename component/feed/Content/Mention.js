import React from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import tw from "../../../lib/tailwind";
import { Dropdown, Like, UnLike, Comment } from "../../../lib/listSvg";
import { PushRoute } from "../../../lib/ctx";

const Mention = ({ componentId }) => {
  const feed = [
    {
      user_name: "Fandy with cheese",
      user_pic:
        "https://instagram.fdps7-1.fna.fbcdn.net/v/t51.2885-19/279012874_295467662748380_3770505763076935918_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdps7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2PmrX8P5l8gAX_WWrfk&tn=5cnKt1aaUh8nZfHV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8M7CHdKlYGrhx_itgtdgiV5ZgRZY4UqfJ8ILq_n_Mwpw&oe=62C8DBFF&_nc_sid=8fd12b",
      from: "Redwhite Coffee",
      post_image:
        "https://cdn.discordapp.com/attachments/972320894242422794/993155655793905704/unknown.png",
      description:
        "Enak banget sumpah ga bohong, kalo bohong gw balikin duit lo 50% biar saling enak",
      food_name: "Nasi Goreng",
      food_desc: "Ini makan enak sejagat raya",
      food_price: 20000,
      likes: 24,
      comments: 19,
      created: "13:00, 1 Sep 2021",
    },
    {
      user_name: "Fandy with cheese",
      user_pic:
        "https://instagram.fdps7-1.fna.fbcdn.net/v/t51.2885-19/279012874_295467662748380_3770505763076935918_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdps7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2PmrX8P5l8gAX_WWrfk&tn=5cnKt1aaUh8nZfHV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8M7CHdKlYGrhx_itgtdgiV5ZgRZY4UqfJ8ILq_n_Mwpw&oe=62C8DBFF&_nc_sid=8fd12b",

      from: "Redwhite Coffee",
      post_image:
        "https://cdn.discordapp.com/attachments/972320894242422794/993155732033773638/unknown.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices nibh auctor.",
      food_name: "Nasi Goreng",
      food_desc: "Ini makan enak sejagat raya",
      food_price: 20000,
      likes: 24,
      comments: 19,
      created: "13:00, 1 Sep 2021",
    },
    {
      user_name: "Fandy with cheese",
      user_pic:
        "https://instagram.fdps7-1.fna.fbcdn.net/v/t51.2885-19/279012874_295467662748380_3770505763076935918_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdps7-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=2PmrX8P5l8gAX_WWrfk&tn=5cnKt1aaUh8nZfHV&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AT8M7CHdKlYGrhx_itgtdgiV5ZgRZY4UqfJ8ILq_n_Mwpw&oe=62C8DBFF&_nc_sid=8fd12b",

      from: "Redwhite Coffee",
      post_image:
        "https://cdn.discordapp.com/attachments/972320894242422794/993155789801930782/unknown.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie ultrices nibh auctor.",
      food_name: "Nasi Goreng",
      food_desc: "Ini makan enak sejagat raya",
      food_price: 20000,
      likes: 24,
      comments: 19,
      created: "13:00, 1 Sep 2021",
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={tw`w-full pt-60`}
      showsVerticalScrollIndicator={false}
      decelerationRate={"normal"}
    >
      {feed.map((f, i) => {
        return (
          <View
            key={i}
            style={tw`bg-white border rounded-xl border-gray-300 w-full h-auto p-4 my-2 shadow-sm`}
          >
            <View style={tw`flex-row items-center w-full justify-between`}>
              <View style={tw`flex-row items-center`}>
                <View style={tw`bg-blue-500 w-12 h-12 rounded-full mr-2`} />
                <Text style={tw`text-base text-gray-800 font-bold`}>
                  {f.user_name}
                </Text>
              </View>
              <Dropdown />
            </View>
            <View
              style={tw`w-full h-96 bg-transparent rounded-xl my-4 overflow-hidden shadow-md`}
            >
              <Image
                style={tw`w-full h-full`}
                resizeMode={"cover"}
                source={{
                  uri: f.post_image,
                }}
              />
            </View>
            <View
              style={tw`border border-gray-300 p-3 rounded-xl mb-4 shadow-sm bg-white`}
            >
              <View style={tw`flex-row`}>
                <View
                  style={tw`bg-black w-16 h-16 rounded-md mr-2 overflow-hidden`}
                >
                  <Image
                    style={tw`w-full h-full`}
                    resizeMode={"cover"}
                    source={{
                      uri: f.post_image,
                    }}
                  />
                </View>
                <View>
                  <Text style={tw`text-sm font-bold text-gray-800`}>
                    Nasi Goreng
                  </Text>
                  <Text style={tw`text-xs text-gray-800`}>Teks</Text>
                </View>
              </View>
              <Text
                style={tw`text-gray-800 absolute bottom-2 right-2 font-bold`}
              >
                20000
              </Text>
            </View>
            <View
              style={tw`flex-row items-center border-b pb-4 border-gray-300`}
            >
              <View style={tw`flex-row items-center mr-4`}>
                <UnLike />
                <Text style={tw`text-xs text-gray-400 font-bold ml-2`}>24</Text>
              </View>
              <View style={tw`flex-row items-center`}>
                <TouchableOpacity
                  onPress={() => PushRoute(componentId, "Comment")}
                >
                  <Comment />
                </TouchableOpacity>
                <Text style={tw`text-xs text-gray-400 font-bold ml-2`}>24</Text>
              </View>
            </View>
            <View>
              <Text style={tw`text-sm font-bold text-gray-800 mt-4`}>
                Redwhite Coffee
              </Text>
              <Text style={tw`text-gray-800 my-2`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Molestie ultrices nibh auctor.
              </Text>
              <Text style={tw`text-gray-300`}>13:00, 1 Sep 2021</Text>
            </View>
            <View style={tw`mt-2 flex-row`}>
              <TouchableOpacity
                style={tw`bg-myellow/20 h-8 rounded-full flex items-center justify-center`}
              >
                <Text style={tw`text-myellow font-bold px-6 text-sm`}>
                  Lihat 26 Comments
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default Mention;
