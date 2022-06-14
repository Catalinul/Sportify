//detailed Post screen
import React, {useState, useEffect} from 'react';
import { View, Text } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
 import {useRoute} from '@react-navigation/native'
import { ConsoleLogger } from '@aws-amplify/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts, getPost } from '../../graphql/queries';


const DetailedPostScreen = (props) => {

    const route = useRoute();

    const idOfPost = route.params.postId;
    console.log("idOfPost/screens/detailedPostScreen", idOfPost);

    const [posts, setPosts] = useState( []);

    useEffect( () => {
        const fetchPosts = async () => {

            //folosim try catch aici pentru ca o sa am niste network calls si se pot intampla multe lucruri proaste cu netul user ului
            
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: { 
                            id: {contains: idOfPost}}
                    })
            )
                
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, )

    console.log("posts/screens/DETAILEDpostscreen", posts);

    return (
        <View style = {{backgroundColor: 'white'}}>
             <DetailedPost post = {posts} /> 
        </View>
    );
};
 
export default DetailedPostScreen;