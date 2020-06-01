import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {
    // creating new flexible card styles with ability to assign styles from outside
    // with ... creating new object by pulling all the styles from StyleSheet
    // 2nd ... allows to merge all the styles from styles= (this way style can be passed from outside)
    return <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
};

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