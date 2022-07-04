import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import PagerView from 'react-native-pager-view';
import Animated, {useHandler, useEvent} from 'react-native-reanimated';
import tw from '../../lib/tailwind';

import NewService from './service/New';
import ProcessService from './service/Process';
import ReadyService from './service/Ready';
import UnpaidService from './service/Unpaid';
import DoneService from './service/Done';

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

const ProcessPage = ({pageRef, setPages}) => {
  const handler = usePagerScrollHandler({
    onPageScroll: e => {
      'worklet';
      console.log(e.offset, e.position);
    },
  });

  return (
    <AnimatedPager
      ref={pageRef}
      style={{flex: 1}}
      initialPage={0}
      onPageSelected={e => {
        console.log('postion process : ', e.nativeEvent.position);
        setPages(e.nativeEvent.position);
      }}
      onPageScroll={handler}>
      <View style={tw`bg-mgray`}>
        <NewService />
      </View>
      <View style={tw`bg-mgray`}>
        <ProcessService />
      </View>
      <View style={tw`bg-mgray`}>
        <ReadyService />
      </View>
      <View style={tw`bg-mgray`}>
        <UnpaidService />
      </View>
      <View style={tw`bg-mgray`}>
        <DoneService />
      </View>
    </AnimatedPager>
  );
};

export default React.memo(ProcessPage);
