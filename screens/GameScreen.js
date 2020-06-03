import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    // passing userChoice in props to exclude this number to be picked on first try
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);

    // useRef value persist after component regenerate. this way we can save lowest and highest guess
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // deconstructing to get props out and assign them to { userChoice, onGameOver }
    const { userChoice, onGameOver } = props;

    // useEffect hook -> runs after re-render cycle. therefore logics for winning number can be run with use of useEffect
    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (
            (direction === 'lower' && currentGuess < props.userChoice) || 
            (direction === 'greater' && currentGuess > props.userChoice)
            ) {
            Alert.alert("Don\'t lie!!!", 'That was false', [{text: 'sorry!', style: 'cancel'}
        ]);
        return;
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess + 1;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        // setRounds(curRounds => curRounds + 1);
        setPastGuesses(curPastGuess => [nextNumber, ...curPastGuess]);
    };

    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
                <Card style={styles.buttonContainer}>
                    <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </MainButton>
                    <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </MainButton>
                </Card>
                <ScrollView>
                    {pastGuesses.map(guess => <View key={guess}><Text>{guess}</Text></View>)}
                </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 400,
        maxWidth: '90%'
    }
});

export default GameScreen;