import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable} from 'react-native';
import styles from './styles.js';
import { useNavigation } from '@react-navigation/native'; 

const Post = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();

    const goToDetailedPostPage = () => {
        navigation.navigate('DetailedPost', {postId: post.id});
    }


    return (

        <Pressable onPress = {goToDetailedPostPage} style = {[ styles.container, { width: width - 60 }]}>
            
            <View style = {styles.innerContainer}> 

                    {/* Image */}
                    <Image 
                        style={styles.image} 
                        source={{uri: post.image }} 
                    />
                

                <View style = {{flex: 1, marginHorizontal: 10}}>

                    {/* Facility Type*/}
                    <Text style={styles.facilityType}>
                        Teren de fotbal ({post.bed}x{post.bedroom} mp)
                    </Text>

                    {/* Type & Description */}
                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>

                    {/* Old price & new price */}
                    <Text style={styles.prices}>
                        <Text style={styles.newPrice}> ${post.newPrice}</Text>
                        / hour   
                    </Text>

                </View>

            </View>

        </Pressable>
    );
};
 
export default Post;