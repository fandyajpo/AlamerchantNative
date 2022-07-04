import React, { useState, useCallback, useEffect, useMemo } from "react";
import { TouchableOpacity, Text, FlatList, View, Pressable, Image, RefreshControl, ScrollView, ImageBackground, Dimensions, Animated } from 'react-native';
import tw from 'twrnc';
import { StudySVG, RightArrowSVG, Speaker } from "../../lib/listSvg";

const CARD_WIDTH = Dimensions.get('window').width * 0.8
const CARD_HEIGHT = Dimensions.get('window').height * 0.7
const SPACING_FOR_CARD_INSET = Dimensions.get('window').width * 0.1 - 10

const cards = [
  { name: 'Card 1', key: 1, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 2', key: 2, deskripsi: 'Setiap tanggal 21 April kita bangsa Indonesia memperingati Hari Kartini. Mengapa sih hari Kartini selalu diperingati setiap tahunnya? Siapa Kartini, dan apa jasanya bagi bangsa dan negara kita? Untuk lebih jelasnya kita baca yuk artikel ini sampai tuntas', judul: 'Selamat Hari Kartini, Ketahui Semua Tentang Kartini!', img: 'https://cashbac.com/blog/wp-content/uploads/2020/04/hari-kartini-759x500.jpg' },
  { name: 'Card 3', key: 3, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 4', key: 4, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 5', key: 5, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 6', key: 6, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 7', key: 7, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 8', key: 8, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 9', key: 9, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
  { name: 'Card 10', key: 10, deskripsi: 'Jadi Tata Upacara Bendera adalah tindakan dan gerkan yang dirangkaikan dan ditata dengan tertib dan disiplin. Pada hakekatnya upacara bendera adalah pencerminan dari nilai-nilai budaya bangsa yang merupakan salah satu pancaran peradaban bangsa, hal ini merupakan ciri khas yang membedakan dengan bangsa lain', judul: 'Upacara Bendera Merah Putih', img: 'https://pltuinjakarta.files.wordpress.com/2011/08/bendera-merah.jpg' },
]
const SCREEN_WIDTH = Dimensions.get("window").width;
const xOffset = new Animated.Value(0);
const transitionAnimation = index => {

  return {
    opacity: xOffset.interpolate({
          inputRange: [
            (index - 1) * 80,
            index * 80,
            (index + 1) * 80
          ],
          outputRange: [0, 1, 0]
        })
  };
};

const renderItem = ({ item, index }, handleExpandPresss) => (

     <View style={[
       tw`w-[8.3rem] h-[15rem] bg-white rounded overflow-hidden ${index+1 < cards.length ? ( index < 1 ? 'ml-[8rem] mr-[1rem]' : 'mr-[1rem]') : ''}`,
       // { flex: 1 }
     ]}>
     <TouchableOpacity onPress={handleExpandPresss}>

        <View style={tw`h-[7.5rem]`}>
          <Image
            source={{uri: item.img}}
            style={{
              resizeMode: 'cover',
              width: '100%', height: '100%'
            }}
          />
        </View>
        <View style={[
          tw`h-[3rem] p-1`,
          {}
        ]}>
          <Text
            style={[
              tw`text-sm font-semibold text-gray-400`
            ]}
            numberOfLines={2}
          >{item.judul}</Text>
        </View>
        <View style={[
          tw`h-full p-1`
        ]}>
          <Text
            style={[
              tw`text-xs font-normal text-gray-700`
            ]}
            numberOfLines={3}
          >{item.deskripsi}</Text>
        </View>
     </TouchableOpacity>
     </View>
);

const Pengumuman = React.memo(({handleExpandPresss}) => {

  return (
    <View
      // source={require('../../assets/images/blueblue.webp')}
      style={[
        tw`bg-blue-900 py-[1.1rem]`,
        // { flex: 1 }
      ]}
    >
      <Animated.View
        style={[{
          position: 'absolute',
          top: 12,
          left: 0,
          right: 0,
          zIndex: 0,
          width: '36%',
          height: '100%',
          backgroundColor: `transparent`,
          alignItems: 'center',
          justifyContent: 'center'
        },
        transitionAnimation(0)
        ]}
      >
        <View style={tw`w-full h-auto flex flex-col items-center justify-center`}>
          <Image
            source={require('../../assets/images/pengumuman.webp')}
            style={[
              tw``,
              {
                height: '80%',
                width: '100%',
                resizeMode: 'contain',
              }
            ]}
          />
          <Text style={tw`text-sm text-white font-bold`}>Pengumuman</Text>
        </View>
      </Animated.View>

      <FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: xOffset } } }],
          { useNativeDriver: false }
        )}
        // onScroll={({e}) => setOpacity(e.nativeEvent.contentOffset.y)}
        // onScroll={(e) => pagination(e.nativeEvent.contentOffset.x)}
        // onScrollEndDrag={e => pagination(e.nativeEvent.velocity.x)}
        // getItemLayout={getItemLayout}
        // extraData={handleExpandPresss}
        data={cards}
        renderItem={(e) => renderItem(e, handleExpandPresss)}
        keyExtractor={(item, index) => item.key + index.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={tw`px-3`}
        bounces={false}
        // numColumns={2}
        // renderItem={this.renderItem}
        // ItemSeparatorComponent={this.ItemSeparatorComponent}
        // ListEmptyComponent={this.ListEmptyComponent}

        //code for optimization and load only visible items
        initialNumToRender={8}
        maxToRenderPerBatch={2}
        onEndReachedThreshold={0.1}
        // removeClippedSubviews={true} // Unmount components when outside of window
        // initialNumToRender={2} // Reduce initial render amount
        // maxToRenderPerBatch={1} // Reduce number in each render batch
        // updateCellsBatchingPeriod={100} // Increase time between renders
        // windowSize={7} // Reduce the window size
        // onMomentumScrollBegin={this.onMomentumScrollBegin}
        // onEndReached={this.onEndReached}
      />
    </View>
  )

})
export default Pengumuman
