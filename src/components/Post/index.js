import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles.js';
 
const Post = (props) => {

    const post = props.post;

    return (
        <View style={styles.container}>
            
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri: post.image }} 
            />

            {/* Facility Type*/}
            <Text style={styles.facilityType}>
                Teren de fotbal sintetic ({post.bed}x{post.bedroom} mp)
            </Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
                {post.type}. {post.title}
            </Text>

            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>${post.oldPrice} </Text>    
                <Text style={styles.newPrice}> ${post.newPrice}</Text>
                / hour   
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>${post.totalPrice} total</Text>

        </View>
    );
};
 
export default Post;