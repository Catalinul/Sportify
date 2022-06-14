import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import styles from './styles.js';
 
const DetailedPost = (props) => {

    //console.log("props din components/DetailedPost",props)

    const posts = props.post;
    //const firstPost = posts[0];

   // let images = posts[0].image;

    console.log("posts din components/DetailedPost",posts)
    //console.log("images din components/DetailedPost",images)

    return (
        <ScrollView>
            <View style={styles.container}>
                
                {/* <Image 
                    style={styles.image} 
                    source={{url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Parcul_Tineretului.jpg/1024px-Parcul_Tineretului.jpg" }} 
                /> */}
{/* 
                <Text style={styles.facilityType}>
                    Teren de fotbal sintetic ({firstPost.bed}x{firstPost.bedroom} mp)
                </Text>

                <Text style={styles.description} numberOfLines={2}>
                    {firstPost.type}. {firstPost.title}
                </Text>


                <Text style={styles.prices}>
                    <Text style={styles.oldPrice}>${firstPost.oldPrice} </Text>    
                    <Text style={styles.newPrice}> ${firstPost.newPrice}</Text>
                    / hour   
                </Text>

                <Text style={styles.totalPrice}>${firstPost.totalPrice} total</Text>

                <Text style = {styles.longDescription}>
                    {firstPost.description}
                </Text> */}

            </View>
        </ScrollView>
    );
};
 
export default DetailedPost;