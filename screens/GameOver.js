import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const GameOverScreen = props => {

    return <View style={styles.main} > 
            <Card style={styles.screen} >
                <Text>Game is over</Text>
                <Text>Number of Rounds: {props.roundsNumber}</Text>
                <Text>Picked number was: {props.userNumber}</Text>
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