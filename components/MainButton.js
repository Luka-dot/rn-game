import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Color from '../constants/Colors';

const MainButton = props => {
                            // getting this onPress function inside component this button will be imported to
    return (
        <TouchableOpacity onPress={props.onPress} activeOpacity={0.6}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{props.children}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles= StyleSheet.create({
    button: {
        backgroundColor: Color.primary,
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 18
    },
    buttonText: {
        color: 'white',
        fontFamily: 'open-sans',
        fontSize: 18
    }
});

export default MainButton;
