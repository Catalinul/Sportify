//detailed Post screen
import React, {useState, useEffect} from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import styles from './styles.js';

 import {useRoute} from '@react-navigation/native'
import { ConsoleLogger } from '@aws-amplify/core';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts, getPost } from '../../graphql/queries';


const DetailedPostScreen = (props) => {

    const route = useRoute();

    const idOfPost = route.params.postId;

    console.log("route.params/screens/detailedPostScreen", route.params);
    console.log("idOfPost/screens/detailedPostScreen", idOfPost);

    const [posts, setPosts] = useState([]);

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

    console.log("posts[0]/screens/DETAILEDpostscreen", posts[0]);


    return (
        <ScrollView>
        <View style={styles.container}>
            
            <Image 
                style={styles.image} 
                source={{uri: posts[0] && posts[0].image }} 
            />

             <Text style={styles.facilityType}>
                Teren de fotbal sintetic ({posts[0] && posts[0].bed}x{posts[0] && posts[0].bedroom} mp)
            </Text>

             <Text style={styles.description} numberOfLines={2}>
                {posts[0] && posts[0].type}. {posts[0] && posts[0].title}
            </Text>


            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${posts[0] && posts[0].oldPrice} </Text>    
                <Text style={styles.newPrice}> ${posts[0] && posts[0].newPrice}</Text>
                / hour   
            </Text>

            <Text style={styles.totalPrice}>${posts[0] && posts[0].totalPrice} total</Text>

            <Text style = {styles.longDescription}>
                {posts[0] && posts[0].description}
            </Text>  

        </View>
    </ScrollView>
    );
};
 
export default DetailedPostScreen;