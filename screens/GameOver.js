import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView } from 'react-native';

import Card from '../components/Card';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {

    return <ScrollView>
            <View style={styles.main} > 
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
           </ScrollView>
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
        maxWidth: '80%',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.55,
        height: Dimensions.get('window').height * 0.4,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').width / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60,
      },
      resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 14 : 18 
      },
      highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
      }
});

export default GameOverScreen;