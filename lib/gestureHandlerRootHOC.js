import React from 'react';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GlobalPortal} from './sheet';
const ProviderWrapper = Component => {
  return props => (
    <SafeAreaProvider>
      <Component {...props} />
    </SafeAreaProvider>
  );
};

export default gestureHandlerRootHOC(ProviderWrapper);
