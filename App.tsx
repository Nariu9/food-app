import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Header} from './components/Header';
import {Search} from './components/Search';
import {Categories} from './components/Categories';
import {Main} from './components/Main';


export default function App() {

    return (
        <View style={styles.container}>
            <Header/>
            <Search/>
            <Categories/>
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