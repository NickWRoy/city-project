import React, {useState} from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/TemporaryLogo.png'
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';


const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const {height} = useWindowDimensions();

    const onSignInPressed = () => {
        console.warn("Sign In")
    };

    const onForgotPasswordPressed = () => {
        console.warn("Forgot Password")
    };

    const onSignInFacebook = () => {
        console.warn("Facebook")
    };

    const onSignInGoogle = () => {
        console.warn("Google")
    };

    const onSignInApple = () => {
        console.warn("Apple")
    };

    const onSignUpPress = () => {
        console.warn("Sign Up")
    };

    return (
        <View style = {styles.root}>
            
            <Image>

            <Image source={Logo} 
            style={[styles.logo, {height: height * 0.3}]} 
            resizeMode="contain"/>

            </Image>

            <CustomInput placeholder = "Username" 
            value={username} 
            setValue={setUsername}/>

            <CustomInput placeholder = "Password" 
            value={password} 
            setValue={setPassword}
            secureTextEntry
            />

            <CustomButton 
            text = "Sign In" 
            onPress = {onSignInPressed}/>

            <CustomButton 
            text = "Forgot Password" 
            onPress = {onForgotPasswordPressed} 
            type = "Tertiary"/>

            <CustomButton 
            text = "Sign In With Facebook" 
            onPress = {onSignInFacebook} 
            bgColor = "#E7EAF4"
            fgColor = "#4765A9"
            />

            <CustomButton 
            text = "Sign In With Google" 
            onPress = {onSignInGoogle} 
            bgColor = "#FAE9Ea"
            fgColor = "#DD4D44"
            />
           
            <CustomButton 
            text = "Sign In With Apple" 
            onPress = {onSignInApple}
            bgColor = "#e3e3e3"
            fgColor = "#363636" 
            />

            <CustomButton 
            text = "Don't Have An Account? Create One." 
            onPress = {onSignUpPressed} 
            type = "Tertiary"/>


        </View>
    )
}

const styles = StyleSheet.create({
    
    root: { 
        alignItems: 'center',
        padding: 20,
    },

    logo: {
        width: '70%',
        maxWidth: 300,
        height: 100,
        maxHeight
    },
});


export default LoginScreen