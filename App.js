import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Home from './src/Containers/home'; 
import Settings from './src/Containers/settings';


const RootStack = createStackNavigator(
  {
    MyHOME : Home,
    MySettings : Settings
  },
  {
    initialRouteName: 'MyHOME',
  }
)

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      //   <Text>Changes you make will automatically reload.</Text>
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
      //<Home/>
      <RootStack/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
