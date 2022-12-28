import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import HomeScreen from './HomeScreen'; 
import DetailsScreen from './DetailsScreen';
import ProfileScreen from './ProfileScreen';
import ExploreScreen from './ExploreScreeen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();
//const Stack = createNativeStackNavigator();

{/*const MainTabScreen = () => {
      return (
        <Tab.Navigator initialRouteName="Home"
        //activeColor="#3e2465"
        //inactiveColor='#fff'
        barStyle={{ backgroundColor: '#009387' ,color: 'white'}}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Details" component={DetailsScreen} />
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Explore" component={ExploreScreen} />
      </Tab.Navigator>

      
      );
    }*/}

    const MainTabScreen = () => {
      return (
        <Tab.Navigator
          initialRouteName="Home"
          activeColor= '#fff'
          inactiveColor='#fff'
          barStyle={{ backgroundColor: '#009387' }}
        >
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
          />
          <Tab.Screen
            name="Notifications"
            component={DetailsStackScreen}
          />
          
           <Tab.Screen
            name="Exlpore"
            component={ExploreScreen}
           />
           
        </Tab.Navigator>
      );
    }

const HomeStackScreen = ({navigation}) => (
  <HomeStack.Navigator screenOptions={{
    headerShown: false
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      //title: 'overview',
    }}
    />
    
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>

    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
      //title: 'overview',
    }}
    />
  </DetailsStack.Navigator>
);





export default MainTabScreen;