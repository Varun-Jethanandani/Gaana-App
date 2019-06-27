
import * as Font from 'expo-font';
import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import AppNavigator from './navigation/AppNavigator';

export default class App extends React.Component{

  constructor(props){
    super(props);

    this.state={
      fontLoaded:false,
    };
  }

  async componentWillMount(){
    await Font.loadAsync({
      'fira-regular': require("./assets/fonts/Fira_Sans/FiraSans-Regular.ttf")
    });
    this.setState({
      fontLoaded:true,
    });
  }

  render() {
    if(this.state.fontLoaded){
      return(
          <View style={styles.container}>
            {Platform.OS === 'android' && <StatusBar barStyle="Light-content"/>}
            <AppNavigator/>
          </View>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
