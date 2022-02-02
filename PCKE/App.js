/**
 * Sample React Native App
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import SigninScreen from './src/screens/SigninScreen';
import GetUserDetailsScreen from './src/screens/GetUserDetailsScreen/GetUserDetailsScreen';
import GetAuthCodeScreen from './src/screens/GetAuthCodeScreen/GetAuthCodeScreen';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={styles.root}>
    
      {/* <GetAuthCodeScreen/>  */}

      {/* <SigninScreen/>   */}

      <GetUserDetailsScreen/> 
      

      
     

     

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 root: {
   flex: 1,
   backgroundColor: '#F9FBFC'
 }
});

export default App;
