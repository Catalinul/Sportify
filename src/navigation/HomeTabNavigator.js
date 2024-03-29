import React from 'react';

import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../screens/Home';
import DestinationSearchScreen from '../screens/DestinationSearch';
import ProfileScreen from '../screens/Profile';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import DetailedPostScreen from '../screens/DetailedPostScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        
        <Tab.Navigator screenOptions = {{
            tabBarActiveTintColor: '#f15454',
            headerShown: false
        }}>

            <Tab.Screen 
            name = {'Explore'} 
            component = { ExploreNavigator } 
            options = {{
                tabBarIcon: ({ color }) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name = {'Saved'} 
            component = { HomeScreen }
            options = {{
                tabBarIcon: ({ color }) => (
                    <FontAwesome name="heart-o" size={25} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name = {'Help'} 
            component = { HomeScreen }
            options = {{
                tabBarIcon: ({ color }) => (
                    <FontAwesome5 name="inbox" size={25} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name = {'Messages'} 
            component = { HomeScreen }
            options = {{
                tabBarIcon: ({ color }) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }}
            />

            <Tab.Screen 
            name = {'Profile'} 
            component = { ProfileScreen }
            options = {{
                tabBarIcon: ({ color }) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }}
            />

        </Tab.Navigator>

    );
};
 
export default HomeTabNavigator;