import React from 'react';
 import {
      View,
      Text,
      Pressable,
      StyleSheet
} from 'react-native';

const BookmarkScreen = ({navigation}) => {
 
      return (
            <View style={styles.container}>
             <Text>Bookmarks</Text>
             <Pressable  onPress={() => navigation.navigate("DetailsScreen")}>
                        <Text style={styles.text}>Go to DetailsScreen</Text>
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


export default BookmarkScreen;