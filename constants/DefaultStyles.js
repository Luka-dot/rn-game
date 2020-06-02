import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    bodyText: {
        fontFamily: 'open-sans'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    }
});

// this approach manages all styles in one file.
// needs to be imported and then used <Text style={DefaultStyles.bodyText} ></Text>