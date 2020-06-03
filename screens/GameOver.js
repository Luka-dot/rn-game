import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText'

const GameOverScreen = props => {

    return <View style={styles.main} > 
            <Card style={styles.screen} >
                <TitleText>Game is over</TitleText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/success.png')} 
                        style={styles.image} 
                        resizeMode="cover"
                    />
                </View>
                <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
                <BodyText>Picked number was: {props.userNumber}</BodyText>
                <Button title="NewGame" onPress={props.onRestart} />
            </Card>
           </View>
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    screen: {
        alignItems: 'center',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 22
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;