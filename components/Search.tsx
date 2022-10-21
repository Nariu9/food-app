import React, {useState} from 'react';
import {Entypo, Feather} from '@expo/vector-icons';
import {Alert, Keyboard, StyleSheet, TextInput, View} from 'react-native';

export const Search = () => {

    const [text, onChangeText] = useState('');
    const [clicked, setClicked] = useState(false)

    const closeSearchHandler = () => {
        Keyboard.dismiss();
        onChangeText('')
        setClicked(false)
    }

    const startSearchHandler = () => {
        Alert.alert(`Show ${text} search results`)
    }

    return (
        <View style={styles.search}>
            <Feather
                name="search"
                size={20}
                color="black"
                style={{marginLeft: 1}}
                onPress={startSearchHandler}
            />
            <TextInput
                onEndEditing={startSearchHandler}       /// вместо он кей прес
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                placeholder={'What would you like to eat?'}
                placeholderTextColor={'grey'}
                onFocus={() => {
                    setClicked(true)
                }}
            />
            {clicked &&
                <Entypo name="cross" size={20} color="black" style={{padding: 1}} onPress={closeSearchHandler}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    search: {
        marginTop: 30,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 20
    },
    input: {
        width: '90%',
        paddingLeft: 10
    },
})