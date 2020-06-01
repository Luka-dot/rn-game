import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    // {...props} this is 'props forwarding' takes ALL the props and adds them to the components so ALL the props can be used 
        // whenever it is imported
    // creating new flexible card styles with ability to assign styles from outside
    // with ... creating new object by pulling all the styles from StyleSheet
    // 2nd ... allows to merge all the styles from styles= (this way style can be passed from outside)
    return <TextInput {...props} style={{ ...styles.input, ...props.style }} />
};

const styles = StyleSheet.create({
    input: {
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
});

export default Input;