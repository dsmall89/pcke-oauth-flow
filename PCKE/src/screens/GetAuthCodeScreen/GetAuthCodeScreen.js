import { View, Text,Image,StyleSheet,useWindowDimensions,ScrollView} from 'react-native';
import React, { useState } from 'react';
import CustomButton from '../../components/CustomButton';
import CustomSignButton from '../../components/CustomSignButton';

const GetAuthCodeScreen = () => {
    const [code, setCode] = useState('');

    const [grantType, setGrantType] = useState('');

    const [redirectUri, setRedirectUri] = useState('');

    const [codeVerifier, setCodeVerifier] = useState('');


    const onSignInPressed = () => {
        console.warn("Enter Required Fields");
    }

    const onGetAccessTokenPressed = () => {
        console.warn("On Get Access Token Pressed");
    }

  return (
      <ScrollView>
    <View style={styles.root}>

    <Text style={styles.title}> Get Authorization Code</Text>

    <CustomButton 
    placeholder={"code"} 
    value= {code}  
    setValue={setCode}
    secureTextEntry={true}
    />

<CustomButton 
    placeholder={"grant_type"} 
    value= {grantType}  
    setValue={setGrantType}
    secureTextEntry={true}
    />

<CustomButton 
    placeholder={"redirect_uri"} 
    value= {redirectUri}  
    setValue={setRedirectUri}
    secureTextEntry={true}
    />

<CustomButton 
    placeholder={"code_verifier"} 
    value= {codeVerifier}  
    setValue={setCodeVerifier}
    secureTextEntry={true}
    />

    <Text style={styles.text}>
    To learn more about getting Access Token, please our{' '}
    <Text style={styles.link} onPress={onGetAccessTokenPressed}> Get Access Token guide here.</Text>
    </Text>

    {/* Will default to Primary when type no defined */}
    <CustomSignButton 
    text="Get Authorization Code Button" 
    onPress={onSignInPressed}
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
    text: {
        color:'gray',
        marginVertical: 10,
    },
    link: {
        color:'#FDB075',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold', 
        color:'#051C60',
        margin:10,
    },
});

export default GetAuthCodeScreen;
