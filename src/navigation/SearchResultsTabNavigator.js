import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';
import { useRoute } from '@react-navigation/native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const route = useRoute();
    const { guests, viewport } = route.params;

    const [posts, setPosts] = useState( []);


    useEffect( () => {
        const fetchPosts = async () => {

            //folosim try catch aici pentru ca o sa am niste network calls si se pot intampla multe lucruri proaste cu netul user ului
            
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts , {
                    filter: {
                        and: {
                            maxGuests: { ge: guests },
                            latitude: {between: [
                                viewport.southwest.lat,
                                viewport.northeast.lat,
                            ]},
                            longitude: {between: [
                                viewport.southwest.lng,
                                viewport.northeast.lng,
                            ]},
                        }
                    } 
                    })
                )
                
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, )

    return (
        <Tab.Navigator screenOptions = {{
            tabBarActiveTintColor: '#f15454',
            tabBarIndicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>

            <Tab.Screen name = {"list"}>
                { () => (<SearchResults  posts = {posts} />) } 
            </Tab.Screen>

            <Tab.Screen name = {"map"}>
                { () => ( <SearchResultsMap posts = {posts} /> ) }
            </Tab.Screen>

        </Tab.Navigator>
    );
};
 
export default SearchResultsTabNavigator;