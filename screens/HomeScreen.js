import React from 'react';
import {
      SafeAreaView,
      StyleSheet,
      ScrollView,
      View,
      Text,
      StatusBar,
      Button,
      Pressable
} from 'react-native';


const HomeScreen = ({ navigation }) => {

      return (
            <View style={styles.container}>
                  <StatusBar backgroundColor='#009387' barStyle="light-content" />
                  <Text style={{ color: 'black' }}>Home Screen</Text>
                  <Pressable  onPress={() => alert('Button Clicked')}>
                        <Text style={styles.text}>Home</Text>
                  </Pressable>

                  <Pressable  onPress={() => navigation.navigate("DetailsScreen",{
                        itemId: 1,
                        otherparam:'anything',
                        
                  })}>
                        <Text style={styles.text}>Go to DetailsScreen</Text>
                  </Pressable> 

                  <Pressable  onPress={() => navigation.navigate("BookmarkScreen")}>
                        <Text style={styles.text}>Go to BookmarkScreen</Text>
                  </Pressable> 

                  <Pressable  onPress={() => navigation.navigate("SettingScreen")}>
                        <Text style={styles.text}>Go to SettingScreen</Text>
                  </Pressable>  
            </View>
      );
};

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


export default HomeScreen;