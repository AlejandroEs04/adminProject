import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Homework from './homework'

const Item = ({homeworkName, homeworkDescription, homeworkDate}) => (
    <View style={{backgroundColor: '#B17100ED', padding: 15, borderRadius: 10, width: '100%', marginTop: 10,}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#f1f1f1'}}>{homeworkName}</Text>
      <Text style={{fontSize: 16, color: '#f1f1f1'}}>{homeworkDescription}</Text>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: '#f1f1f1'}}>{homeworkDate}</Text>
    </View>
  );
  

const ListadoHomeworks = ({homeworks}) => {
    return (
        <FlatList
            data={homeworks}
            renderItem={({item}) => <Item homeworkName={item.homeworkName} homeworkDescription={item.homeworkDescription} homeworkDate={item.homeworkDate} />}
            keyExtractor={item => item.id}
        />
    )
}

const styles = StyleSheet.create({
    homeworksContainer: {
        display: 'flex',
        gap: 10,
        maxHeight: 200,
    },
})

export default ListadoHomeworks