import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import { DrawerContent } from './screens/DrawerContent';

//import TabScreen from './screens/TabScreen';
//import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingScreen from './screens/SettingScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import ProfileScreen from './screens/ProfileScreen';
import DetailsScreen from  './screens/DetailsScreen';

import RootStackScreen from './screens/RootStackScreen';

import { AuthContext } from './components/Context';

import AsyncStorage from '@react-native-async-storage/async-storage';
import HomeScreen from './screens/HomeScreen';

const Drawer = createDrawerNavigator();

const App = () => {
   // const [isLoading, setIsLoading] = React.useState(true);
   // const [userToken, setUserToken] = React.useState(null);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,

        } ;
        case 'LOGOUT':
        return{
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
        case 'REGISTER':
        return{
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(() => ({
    signIn: async(userName,password) => {
      // setUserToken('fgkj');
      // setIsLoading(false);
      let userToken;
       userToken = null;
      //const userToken = String(foundUser[0].userToken);
      //const userName = foundUser[0].username;

      if( userName == 'user' && password == 'pass'){
      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
    }
      // console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken });
    },
    signOut: async() => {
      // setUserToken(null);
      // setIsLoading(false);
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
    signUp: () => {
      // setUserToken('fgkj');
      // setIsLoading(false);
    },
    toggleTheme: () => {
      setIsDarkTheme( isDarkTheme => !isDarkTheme );
    }
  }), []);
  
  useEffect(() => {
    setTimeout(async() => {
      //setIsLoading(false);
      let userToken;
      userToken = null;
      try{
        userToken = await AsyncStorage.getItem('userToken')
      } catch(e) {
        console.log(e);
      } 
      // console.log('user token:', userToken);
      dispatch({ type: 'RETRIVE_TOKEN', token: userToken});
    },1000);
  },[]);

  if(loginState.isLoading) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      { loginState.userToken !== null ? (
      
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="DetailsScreen" component={DetailsScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} /> 
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        <Drawer.Screen name="ProfileScreen" component={ProfileScreen} /> 
      </Drawer.Navigator>
      )
    :
    <RootStackScreen /> 
    }
    </NavigationContainer>
    </AuthContext.Provider>
  );

}

{/*import react from "react";
import TabScreen from "./screens/TabScreen";
 const App = () => {
  return(
    <TabScreen />
  );
 }*/}

export default App;