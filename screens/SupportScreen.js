import React from 'react';
 import {
      View,
      Text,
      Button
} from 'react-native';

const SupportScreen = () => {
 
      return (
            <View style={{flex: 1, alignItems: 'center' ,justifyContent: 'center'}}>
             <Text>SupportScreen</Text>
                  <Button
                        title="Click Here"
                        onPress={() => alert('Button Clicked!')}
                  />
            </View>
      );
};

export default SupportScreen;