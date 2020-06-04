import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import BodyText from '../components/BodyText';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
};

// FOR ScrollView set up
// const renderListItem = (value, numOfRound) => (
//     <View key={value} style={styles.listItem}>
//         <BodyText>Attempt: {numOfRound}</BodyText>
//         <BodyText>{value}</BodyText>
//     </View>
// );

//for FlatList set up
const renderListItem = (listLength, itemData) => (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );

const GameScreen = props => {
    // passing userChoice in props to exclude this number to be picked on first try
    const initialGuess = generateRandomBetween(1, 100, props.userChoice);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [pastGuesses, setPastGuesses] = useState([initialGuess]);
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height);

    // useRef value persist after component regenerate. this way we can save lowest and highest guess
    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    // deconstructing to get props out and assign them to { userChoice, onGameOver }
    const { userChoice, onGameOver } = props;

    useEffect (() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);

        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        };
    });

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

    if (availableDeviceHeight < 500) {
        return (
            <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <View style={styles.controls}>
            <MainButton onPress={nextGuessHandler.bind(this, 'lower')}>
                        <Ionicons name="md-remove" size={24} color="white"/>
                    </MainButton>
            <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress={nextGuessHandler.bind(this, 'greater')}>
                        <Ionicons name="md-add" size={24} color="white"/>
                    </MainButton>
            </View>        
                    
                
                    <View style={styles.listContainer}>
                       {/* <ScrollView contentContainerStyle={styles.list}>
                            {pastGuesses.map((guess, index) => (renderListItem(guess, pastGuesses.length - index)))}
                        </ScrollView>  */}
                        <FlatList
                            keyExtractor={item => item}
                            data={pastGuesses}
                            renderItem={renderListItem.bind(this, pastGuesses.length)}
                            contentContainerStyle={styles.list}
                            />
                    </View> 
        </View>
        )
    }

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
                    <View style={styles.listContainer}>
                       {/* <ScrollView contentContainerStyle={styles.list}>
                            {pastGuesses.map((guess, index) => (renderListItem(guess, pastGuesses.length - index)))}
                        </ScrollView>  */}
                        <FlatList
                            keyExtractor={item => item}
                            data={pastGuesses}
                            renderItem={renderListItem.bind(this, pastGuesses.length)}
                            contentContainerStyle={styles.list}
                            />
                    </View> 
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
      },
      controls: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
          alignItems: 'center'
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // Dimensions API (react-native) + .height gets width of the window
        marginTop: Dimensions.get('window').height > 600 ? 30 : 5,    // original 20
        width: 400,
        maxWidth: '90%'
      },
      listContainer: {
        flex: 1,
        width: Dimensions.get('window').width > 350 ? '60%' : '80%', 
      },
        // FlatList set up
      list: {
        flexGrow: 1,
        // alignItems: 'center',
        justifyContent: 'flex-end',
      },
      listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
      }


    // ScrollView set up  
    //   list: {
    //     flexGrow: 1,
    //     alignItems: 'center',
    //     justifyContent: 'flex-end'
    //   },
    //   listItem: {
    //     borderColor: '#ccc',
    //     borderWidth: 1,
    //     padding: 15,
    //     marginVertical: 10,
    //     backgroundColor: 'white',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     width: '60%'
    //   }
});

export default GameScreen;