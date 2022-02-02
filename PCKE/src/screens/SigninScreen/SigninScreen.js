import { View, Text,Image,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import Logo from '../../../assests/images/zoomlogo.png';
import CustomButton from '../../components/CustomButton';
import CustomSignButton from '../../components/CustomSignButton';
import SocialSignButtons from '../../components/SocialSignButtons/SocialSignButtons';

const SigninScreen = () => {
    const [clientID, setClientID] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Enter ClientID");
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

    <CustomButton 
    placeholder={"ClientID"} 
    value= {clientID}  
    setValue={setClientID}
    secureTextEntry={true}
    />
    {/* Will default to Primary when type no defined */}
    <CustomSignButton 
    text="Get Auth Code Button" 
    onPress={onSignInPressed}
    />

    <CustomSignButton 
    text="Forgot ClientID Button" 
    onPress={onForgotClientID}
    type="TERTIARY"
    />

    {/* Ex. Normalized screen to retain screen realestate */}
    <SocialSignButtons/>


<CustomSignButton 
    text="Don't have an OAuth App, create one here : marketplace.zoom.us/" 
    onPress={onNeedOAuthApp}
    type="TERTIARY"
    />

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
});

export default SigninScreen;
