/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { Blur, Canvas } from '@shopify/react-native-skia';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import { Colors, Header } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Canvas>
          <Blur blur={36} />
        </Canvas>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
