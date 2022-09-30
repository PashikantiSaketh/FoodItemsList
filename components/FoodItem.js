import {StyleSheet,View,Text,Pressable} from 'react-native';

function FoodItem(props) {
    return (
        <View style={styles.foodItem}>
        <Pressable 
        android_ripple={{color : '#dddddd'}}
        onPress={props.onDeleteItem.bind(this, props.id)}>
            <Text style={styles.foodText}>{props.text}</Text>
        </Pressable>
        </View>
        
    );
};

export default FoodItem;

const styles = StyleSheet.create({
    foodItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc', 
    },
      foodText:{
        color: 'white',
        padding: 8,
        borderRadius: 6,
    }
}); 