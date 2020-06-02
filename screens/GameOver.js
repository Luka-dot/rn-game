import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText'

const GameOverScreen = props => {

    return <View style={styles.main} > 
            <Card style={styles.screen} >
                <TitleText>Game is over</TitleText>
                <Image source={require('../assets/success.png')} />
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
    }
});

export default GameOverScreen;