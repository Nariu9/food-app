import React from 'react';
import {Dimensions, FlatList, Image, ListRenderItem, StyleSheet, Text, View} from 'react-native';

const {width} = Dimensions.get('screen')
const WIDTH = width
const PADDING = 20
const NUM_COL = 2

const dishNames = ['Salad', 'Steak', 'Chicken', 'Korean']
const bgColors = ['#eaf9e6', '#ffe8ee', '#e6edfa', '#ffefb7']
const dishPicks = [
    'https://i.postimg.cc/Tw86T1mF/h-PCVtw-XSNDEG0-En-MP1-J56-transformed.png',
    'https://i.postimg.cc/HxQCnm9x/Zg4-GGRg-EPyd-V7a-Hktl-X8-K-transformed.png',
    'https://i.postimg.cc/8ctShVXb/Od6-QQi-Hv-LE-42-DP77-Jd-YL-transformed.png',
    'https://i.postimg.cc/bwBPF3vz/h-CEBrs-Dbr-Hlk5ux-V4nsg2-transformed.png'
]

type DataType = {
    id: number
    dishName: string
    bgColor: string
    dishPick: string
}

const arrData = new Array(20)
    .fill(null)
    .map((_, index) => ({
        id: index + 1,
        dishName: dishNames[index % dishNames.length],
        bgColor: bgColors[index % bgColors.length],
        dishPick: dishPicks[index % dishPicks.length]
    }))


export const Main = () => {

    const render: ListRenderItem<DataType> = ({item}) => {
        return <View style={[styles.dish, {backgroundColor: item.bgColor}]}>
            <Text numberOfLines={1} style={styles.dishName}>{item.dishName}</Text>
            <Image
                style={styles.dishImg}
                source={{uri: item.dishPick}}/>
        </View>
    }

    return (
        <View style={styles.main}>
            <View style={styles.titleBlock}>
                <Text style={styles.mainTitle}>Main Course</Text>
                <Text style={styles.mainFilter}>See All</Text>
            </View>
            <FlatList
                /*ListHeaderComponent={()=><View style={styles.titleBlock}>
                    <Text style={styles.mainTitle}>Main Course</Text>
                    <Text style={styles.mainFilter}>See All</Text>
                </View>}*/
                ListEmptyComponent={() => <View><Text>List is empty</Text></View>}
                data={arrData}
                renderItem={render}
                numColumns={NUM_COL}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            showsVerticalScrollIndicator={false}/>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        marginTop: 30,
    },
    titleBlock: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 10
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    mainFilter: {
        fontSize: 16,
        color: 'red'
    },
    dish: {
        marginVertical: 5,
        width: (WIDTH - PADDING * 2) / NUM_COL - 5,
        height: (WIDTH - PADDING * 2) / NUM_COL - 5,
        padding: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        position: 'relative',
        overflow: 'hidden'
    },
    dishName: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    dishImg: {
        position: 'absolute',
        width: 170,
        height: 170,
        left: 37,
        top: 37
    }
})