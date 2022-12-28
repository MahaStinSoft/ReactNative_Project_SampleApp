import React from "react";
import {
      View,
      Text,
      TouchableOpacity,
      StyleSheet,
      Dimensions,
      Image,
      StatusBar
} from 'react-native';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({navigation}) => {
      return (
            <View style={styles.container}>
                  <StatusBar backgroundColor='#009387' barStyle='light-content' />
                  <View style={styles.header}>
                 <Animatable.Image 
                   animation="bounceIn"
                   //duration="1500"
                   source={require('../assets/logo4.png')}
                   style={styles.logo}
                   resizeMode="stretch"
      />
                    <Animatable.Text
                    style={styles.head}
                     animation="zoomInUp">Sample App</Animatable.Text>
                  
                  </View>
                  <Animatable.View
                   style={styles.footer}
                   animation="fadeInUpBig"
                  >
                        <Text style={styles.title}>Welcome To ReactNative Application</Text>
                        <Text style={styles.text}>Sign in with Account</Text>
                        <View style={styles.button}>
                        <TouchableOpacity onPress={() =>navigation.navigate('SignInScreen')}>
                              <LinearGradient
                              colors={['#08d4c4','#01ab9d']}
                              style={styles.signIn}
                              >
                                    <Text style={styles.textSign}>Get Started</Text>
                                    {/*<MaterialIcons
                                    //name="arrow-right-outlined"
                                    color="#fff"
                                    size={20}
                                     >*/}
                              </LinearGradient>
                        </TouchableOpacity>
                        </View>
                  </Animatable.View>
            </View>
      );
};

export default SplashScreen;

const {heigt} = Dimensions.get("screen");
//const height_logo =heigt * 0.28;

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#009387',
      },
      header: {
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center'
      },
      footer: {
            flex: 1,
            backgroundColor: '#fff',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingVertical: 50,
            paddingHorizontal: 30
      },
      logo: {
            width:'40%',
            height: '40%'
      },
      title: {
            color: '#05375a',
            fontSize: 25,
            fontWeight: 'bold'
      },
      text: {
            color: 'grey',
            marginTop: 5
      },
      button: {
            alignItems: 'flex-end',
            marginTop: 30
      },
      signIn: {
            width: 150,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            flexDirection: 'row'
      },
      textSign: {
            color: 'white',
            fontWeight: 'bold'
      },
      head: {
            color: 'white',
            fontWeight: 'bold',
            fontSize:35
      }

});

