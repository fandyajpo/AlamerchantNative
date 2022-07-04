import React from 'react';
import {Animated, Text, View, Button} from 'react-native';
import tw from '../../lib/tailwind';
// You can then use your `FadeInView` in place of a `View` in your components:
const Test = ({children}) => {
  const [anime, setAnime] = React.useState(false);

  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const FadeInView = React.useCallback(() => {
    React.useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: anime ? 1 : 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        {children}
      </Animated.View>
    );
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Animate" onPress={() => setAnime(!anime)} />
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'black'}}>
        <Text style={tw`text-black`}>Fading in</Text>
      </FadeInView>
    </View>
  );
};

export default Test;
