import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const foodCategories = [
    {id: 1, title: 'Main', uri: 'https://t.ly/GO5p'},
    {id: 2, title: 'Appetizer', uri: 'https://t.ly/qkO-'},
    {id: 3, title: 'Drinks', uri: 'https://t.ly/O-Fx'},
    {id: 4, title: 'Dessert', uri: 'https://t.ly/0J-W'},
]

export const Categories = () => {

    const categoriesToRender = foodCategories.map(el => <View key={el.id} style={styles.categoryItem}>
        <Image
            style={styles.itemImg}
            source={{uri: el.uri}}/>
        <Text style={styles.itemText}>{el.title}</Text>
    </View>)

    return (
        <View style={styles.categories}>
            <Text style={styles.categoriesTitle}>Choose Category</Text>
            <View style={styles.categoriesItems}>
                {categoriesToRender}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    categories: {
        marginTop: 30,
    },
    categoriesTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    categoriesItems: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryItem: {
        padding: 10
    },
    itemImg: {
        width: 50,
        height: 50,
    },
    itemText: {
        fontSize: 14,
        textAlign: 'center'
    },
})