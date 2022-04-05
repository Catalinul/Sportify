import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack'; //am nev de asta pt a crea o StackNavigator component
import { NavigationContainer } from '@react-navigation/native'; //toate navigarile/routarile ar trb sa fie in interiorul unui NavigationContainer. el se ocupa de logica navigarilor
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";


import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen 
                name = {"Home"}
                component = {HomeTabNavigator} 
                options = {{
                    headerShown: false
                }}
                />

                <Stack.Screen 
                name = {"Destination Search"}
                component = {DestinationSearchScreen} 
                options = {{
                    title: "Search your destination"
                }}
                />

                <Stack.Screen 
                name = {"Guests"}
                component = {GuestsScreen} 
                options = {{
                    title: "How many people?"
                }}
                />

            </Stack.Navigator>

        </NavigationContainer>
    );
};
 
export default Router;