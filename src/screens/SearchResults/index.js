import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';

import Post from '../../components/Post';

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';


const SearchResultsScreen = (props) => {

    const [posts, setPosts] = useState( []);

    useEffect( () => {
        const fetchPosts = async () => {
            //folosim try catch aici pentru ca o sa am niste network calls si se pot intampla multe lucruri proaste cu netul user ului
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts)
                )
                
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, )

    return (
        <View>
            <FlatList 
            data = {posts}
            renderItem = { ({item}) => <Post post={item} /> }
            />

        </View>
    );
};
 
export default SearchResultsScreen;