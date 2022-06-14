import React, {useEffect, useState} from 'react';
import { View, FlatList } from 'react-native';
import Post from '../../components/Post';

const SearchResultsScreen = (props) => {   

    const { posts } = props;

    //console.log("posts din screens/searchresults", posts);


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