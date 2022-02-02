import { View, Text } from 'react-native';
import React from 'react';
import CustomSignButton from '../CustomSignButton';

const SocialSignButtons = () => {

    const onSignInGoogle = () => {
        console.warn("Enter Google Credentials ");
    }

  return (
    <>

      <CustomSignButton 
    text="Sign In with Google Button" 
    onPress={onSignInGoogle}
    bgColor="#FAE9EA"
    fgColor= "#DD4D44"
    />

    </>
  );
};

export default SocialSignButtons;
