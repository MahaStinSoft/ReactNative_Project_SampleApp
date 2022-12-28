import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const DetailsScreen = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Details Screen</Text>
        <Pressable onPress={() => navigation.navigate("DetailsScreen")}>
          <Text style={styles.text}>Go to details screen...again</Text>
        </Pressable>
  
        <Pressable onPress={() => navigation.navigate("HomeScreen")}>
          <Text  style={styles.text}>Go to home</Text>
        </Pressable>
           
        <Pressable  onPress={() => navigation.goBack()}>
          <Text  style={styles.text}>Go back</Text>
        </Pressable>
      </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#3498DB' ,
  },
});
