import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomButton = ( {onPress, text, type = "Primary", bgColor, fgColor}) => {
    return (
        <Pressable onPress = {onPress} 
            style = {[styles.container, 
            styles['container_${type}'],
            bgColor ? {backgroundColor: bgColor} : {}
        ]}>
        
        <Text 
            style = {[styles.text, 
            styles['text_${type}'],
            fgColor ? {color: fgColor} : {},
    
            ]}>
            {text}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',

        width: '100%',

        padding: 15,
        marginVertical: 5,

        alignItems: 'center',
        borderRadius: 5,
    },

    container_Primary: {
        backgroundColor: '#3B71F3',
    },

    container_Tertiary: {

    },

    text: {
        fontWeight: 'bold',
        color: 'white'
    },

    text_Tertiary: {
        color: 'gray'
    },
})