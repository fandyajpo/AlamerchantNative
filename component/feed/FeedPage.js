import React, {useCallback} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {useHandler, useEvent} from 'react-native-reanimated';
import tw from '../../lib/tailwind';
import Header from './Header';
import Feed from './Content/Feed';
import Event from './Content/Event';
import Mention from './Content/Mention';

const AnimatedPager = Animated.createAnimatedComponent(PagerView);

export function usePagerScrollHandler(handlers, dependencies) {
  const {context, doDependenciesDiffer} = useHandler(handlers, dependencies);
  const subscribeForEvents = ['onPageScroll'];

  return (
    useEvent <
    (event => {
      'worklet';
      const {onPageScroll} = handlers;
      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {
        onPageScroll(event, context);
        console.log(event);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer)
  );
}

const FeedPage = ({componentId}) => {
  const feedRef = React.useRef(0);
  const [feedSwitch, setFeedSwitch] = React.useState(0);

  const handler = React.useCallback(
    usePagerScrollHandler({
      onPageScroll: e => {
        'worklet';
        console.log(e.offset, e.position);
      },
    }),
  );

  return (
    <View style={({flex: 1}, tw`bg-white`)}>
      <Header
        feedRef={feedRef}
        feedSwitch={feedSwitch}
        setFeedSwitch={setFeedSwitch}
        componentId={componentId}
      />
      <View style={tw`w-full h-full bg-mgray`}>
        <AnimatedPager
          ref={feedRef}
          style={{flex: 1}}
          initialPage={0}
          onPageSelected={useCallback(e => {
            setFeedSwitch(e.nativeEvent.position);
          })}
          onPageScroll={handler}>
          <View style={tw`bg-mgray`}>
            <Feed componentId={componentId} />
          </View>
          <View style={tw`bg-mgray`}>
            <Event />
          </View>
          <View style={tw`bg-mgray`}>
            <Mention />
          </View>
        </AnimatedPager>
      </View>
    </View>
  );
};

export default React.memo(FeedPage);
