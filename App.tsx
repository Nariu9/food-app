import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Main} from './components/Main';


export default function App() {

    return (
        <View style={styles.container}>
            <Main/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        backgroundColor: '#ffeedb'
    }
});