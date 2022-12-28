import React from 'react';
 import {
      View,
      Text,
      Button,
      
} from 'react-native';

const ExploreScreen = ({navigation}) => {
 
      return (
            <View style={{flex: 1, alignItems: 'center' ,justifyContent: 'center'}}>
             <Text>ExploreScreen</Text>
             <Button
             title= "Go to Details Screen"
             onPress={() =>navigation.navigate('Details')}
             />
            </View>
      );
};

export default ExploreScreen;