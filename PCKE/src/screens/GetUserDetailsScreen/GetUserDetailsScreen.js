import { View, Text,Image,StyleSheet,useWindowDimensions,ScrollView, ActivityIndicator, FlatList, SafeAreaView,useColorScheme} from 'react-native';
import React, { useEffect, useState } from 'react';

import Logo from '../../../assests/images/hellozoom.png';
import CustomButton from '../../components/CustomButton';
import CustomSignButton from '../../components/CustomSignButton';
import SocialSignButtons from '../../components/SocialSignButtons/SocialSignButtons';

const GetUserDetailsScreen = () => {
   const [clientID, setClientID] = useState('');

   const {height} = useWindowDimensions();
    
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);

   const getUserDetails = async () => {
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
    getUserDetails();
  }, []);
  
  buttonClickListener = () => {
    alert("Clicked On Button !!!");
  };
  
    const onSignInPressed = () => {
        console.warn("Get User Details ");
    }

    const onForgotClientID = () => {
        console.warn("Visit OAuth App In Zoom Marketplace");
    }

    const onNeedOAuthApp = () => {
        console.warn("Build OAuth in the Zoom Marketplace ! ");
    }

  return (
    <ScrollView>
    
    <View style={styles.root}>

    <Image 
     source={Logo} 
     style={[styles.logo,{height:height * 0.3}]} 
     resizeMethod='contain'/>

   <Text 
   style={styles.title}> 
   Authorized, Welcome ! 
   </Text>

    
    {/* Will default to Primary when type no defined */}
    
    <CustomSignButton text="Get User Details Button" onPress={onSignInPressed}/>
    
     <View style={{ flex: 1, padding: 35 }}> 
     {isLoading ? <ActivityIndicator/> : (
          <FlatList data={data} keyExtractor={({ id }, index) => id} renderItem={({ item }) => (
          <Text>{item.title}, {item.releaseYear}</Text>)}/>)}
      </View>

    </View>
    </ScrollView>  
  );
};
const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,

    },
    logo: {
        width: '70%',
        maxWidth: 400,
        maxHeight:300,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold', 
        color:'#051C60',
        margin:10,
        alignItems: 'center',
    },
    
});

export default GetUserDetailsScreen;
