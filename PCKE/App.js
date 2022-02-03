
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView,StyleSheet,Text,useColorScheme,View} from 'react-native';



import SigninScreen from './src/screens/SigninScreen';
import GetUserDetailsScreen from './src/screens/GetUserDetailsScreen/GetUserDetailsScreen';
import GetAuthCodeScreen from './src/screens/GetAuthCodeScreen/GetAuthCodeScreen';




const App = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);
  


  return (
    <SafeAreaView style={styles.root}>
    
      {/* <GetAuthCodeScreen/>  */}

      {/*  <SigninScreen/>  */}

      {/*  */}
      <SigninScreen/> 
      <GetAuthCodeScreen/> 
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
