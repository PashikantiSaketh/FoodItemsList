import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

function FoodInput(props) {
    const [enteredFoodText, setEnteredFoodText] = useState('');
    

    function foodInputHandler(enteredText){
        setEnteredFoodText(enteredText);
      };
    
    function addFoodHandler() {
        props.onAddFoodItem(enteredFoodText);
        setEnteredFoodText(''); 
    };
    return(
        <Modal visible={props.visible} animationType='slide'>
        <View style={styles.inputContainer}>
            <Image source={require('../assets/food.png')} style={styles.image}/>
            <TextInput 
            placeholder='Your Food List!' 
            style={styles.textInput} 
            onChangeText={foodInputHandler} 
            value={enteredFoodText}/>
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='cancel' onPress={props.onCancel} color='#f31282'/>
                </View>
                <View style={styles.button}>    
                    <Button title='Add Food Item' onPress={addFoodHandler} color='//#region 5e0acc'/>
                </View>
            </View>
        </View>
        </Modal>
    );
};

export default FoodInput;

const styles=StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b'
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        width: '90%',
        padding: 6,
        bottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 8
    },
    button: {
        width: '40%',
        marginHorizontal: 8
    },
    image: {
        width:100,
        height: 100,
        margin: 20,
        borderRadius: 50
    }
});