import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    return <View style={styles.main} > 
            <Card style={styles.screen} >
                <TitleText>Game is over</TitleText>
                <View style={styles.imageContainer}>
                    <Image 
                        source={require('../assets/success.png')} 
                        // web link example  source={{uri: 'https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg'}}
                        style={styles.image} 
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.resultContainer}>
                    <BodyText style={styles.resultText}>
                    Your phone needed{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
                    guess the number{' '}
                    <Text style={styles.highlight}>{props.userNumber}</Text>.
                    </BodyText>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
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
        height: '50%',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 22
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
      },
      resultText: {
        textAlign: 'center',
        fontSize: 20
      },
      highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
      }
});

export default GameOverScreen;