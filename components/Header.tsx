import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';

export const Header = () => {

    const [location, setLocation] = useState('Paris');

    return (
        <View style={styles.header}>
            <View>
                <Text style={styles.title}>Delivery</Text>
                <Picker
                    style={styles.picker}
                    selectedValue={location}
                    onValueChange={(itemValue, itemIndex) =>
                        setLocation(itemValue)
                    }>
                    <Picker.Item label="Paris" value="Paris"/>
                    <Picker.Item label="London" value="London"/>
                    <Picker.Item label="Berlin" value="Berlin"/>
                    <Picker.Item label="Tokyo" value="Tokyo"/>
                </Picker>
            </View>
            <View>
                <Image
                    style={styles.avatar}
                    source={{
                        uri: 'https://t.ly/66jh',
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        width: '100%',
        marginTop: 35,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 5
    },
    picker: {
        width: 120,
    },
    avatar: {
        width: 65,
        height: 65,
        borderRadius: 50
    }
})