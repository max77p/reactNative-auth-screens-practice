import React from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import ListItem from "../ListItem/ListItem";


const placeList = props => {
    console.log(props);
    return (
        < FlatList
            style={styles.listItems}
            data={props.places}
            // keyExtractor={item => item.index_id}
            renderItem={(info) => (
                <ListItem
                    placeName={info.item.name}
                    placeImage={info.item.image}
                    onItemPressed={() => props.onItemSelected(info.item.key)}
                />
            )}
        />

    )
}

const styles = StyleSheet.create({
    listItems: {
        width: "100%"
    }
})


export default placeList;