import React, {useEffect, useState} from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import styles from './styles.js';
 
const DetailedPost = (props) => {

    //console.log("props din components/DetailedPost",props)

    const posts = props.post;
    //const firstPost = posts[0];

    //object = JSON.parse(posts);

   // let images = posts[0].image;

   const postsParsed = JSON.parse(JSON.stringify(posts))
    console.log("postsParsed din components/DetailedPost",postsParsed)
    //console.log("JSON posts[ din components/DetailedPost",JSON.parse(JSON.stringify(posts)))
    //console.log("posts convertit in object din components/DetailedPost",object)

    //console.log("images din components/DetailedPost",postsParsed[0].bed)

    return (
        <ScrollView>
            <View style={styles.container}>
                
                <Image 
                    style={styles.image} 
                    source={{url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Parcul_Tineretului.jpg/1024px-Parcul_Tineretului.jpg" }} 
                />

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
                </Text>

            </View>
        </ScrollView>
    );
};
 
export default DetailedPost;