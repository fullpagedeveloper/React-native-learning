import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import ComponentCardView from './ComponentCardView';
import MateriFlexBox from './MateriFlexBox';
import PositionReactNative from './PositionReactNative';

const App = () => {
  return <StyleComponent />
}

const StyleComponent = () => {
  return (
    <ScrollView>
      <View>
        <ComponentCardView />
        <SampleComponent />
        <MateriFlexBox />
        <PositionReactNative />
      </View>
    </ScrollView>
  )
}

export default App;