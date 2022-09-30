import { useState } from 'react';
import { Button, FlatList, StyleSheet, View, Text} from 'react-native';

import FoodItem from './components/FoodItem';
import FoodInput from './components/FoodInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const [FoodList, setFoodList] = useState([]);

  function startAddFoodItemHandler(){
    setModalIsVisible(true);
  };

  function endAddFoodItemHandler(){
    setModalIsVisible(false);
  };

  function addFoodHandler(enteredFoodText){
    setFoodList((currentFoodList) => [...currentFoodList, 
    {text: enteredFoodText, id: Math.random().toString()},
  ]);
  setModalIsVisible(false);
  };

  function deleteFoodItemHandler(id){
    setFoodList((currentFoodList) => {
      return currentFoodList.filter((foodItem) => foodItem.id !== id);
    });
    };


  return (
    <>
    <StatusBar style='light'/>
    <View style={styles.appContainer}>
      <Button title='Add New Item' color='#a065ec' onPress={startAddFoodItemHandler} />
      {modalIsVisible && <FoodInput visible={modalIsVisible} onAddFoodItem={addFoodHandler} onCancel={endAddFoodItemHandler}/>}
      <View style={styles.foodContainer}>
      <FlatList data = {FoodList} renderItem={(itemData) => {
        return (
          <FoodItem text = {itemData.item.text}
          id = {itemData.item.id} 
          onDeleteItem={deleteFoodItemHandler}/>
        );
      }} 
      keyExtractor = {(item, index) => {
        return item.id;
      }}
      alwaysBounceVertical={false}
      /> 
      </View>
      <View style={styles.text}>
        <Text >Tap on Item to Delete</Text>
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    backgroundColor: '#1e085a',
  },
  foodContainer: {
    flex: 5
  },
  text: {
    paddingBottom: 6,
    alignContent: 'center',
    alignItems: 'center',
  }
});
