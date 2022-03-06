import React from 'react';
import { View, Text, Image} from 'react-native';
import styles from './styles.js';
 
const Post = (props) => {
    return (
        <View style={styles.container}>
            
            {/* Image */}
            <Image 
                style={styles.image} 
                source={{uri: 'https://mumonarchs.com/images/2021/3/1/facilities_SOC_Duggins_aerial_lighted_DJI_0237_edited.jpg?width=600&height=360&mode=crop' }} 
            />

            {/* Facility Type*/}
            <Text style={styles.facilityType}>Teren de fotbal sintetic</Text>

            {/* Type & Description */}
            <Text style={styles.description} numberOfLines={2}>
            This field can accomodate up to 12 players. It's not natural grass. Bla bla bla bla bla bla bla, bla bla bla! Blablablabla... blabla.    
            </Text>

            {/* Old price & new price */}
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}>$36 </Text>    
                <Text style={styles.newPrice}> $30</Text>
                / hour   
            </Text>

            {/* Total price */}
            <Text style={styles.totalPrice}>$230 total</Text>

        </View>
    );
};
 
export default Post;