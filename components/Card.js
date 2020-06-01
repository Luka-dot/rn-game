import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    return <View style={{...styles.card}}>{props.children}</View>
},

const styles = StyleSheet.create({
    card: {    
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 11,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10
    }
});

export default Card;