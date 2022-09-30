import React from "react";
import {View,Text,StyleSheet} from "react-native";

export default function Display(props){
    return(
        <View style={styles.foodContainer}>
        <Text>{props.name}{props.price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    foodContainer: {
        flex: 3
      }
    });
    