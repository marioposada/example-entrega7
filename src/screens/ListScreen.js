import { FlatList, StyleSheet, Text, View } from 'react-native'

import React from 'react'

const ListScreen = () => {
    const friends = [
        {name: "Luciano", age: 20},
        {name: "Gustavo",age: 20},
        {name: "SebaSix",age: 20},
        {name: "Pablito",age: 20},
        {name: "Peka",age: 20},
    ]

  return (
    <FlatList
    keyExtractor={friends => friends.name}
    data={friends}
    renderItem={({item}) => {
        return <Text>{item.name}-{item.age}</Text>
    }}
    />
  )
};

const styles = StyleSheet.create({

})

export default ListScreen;


