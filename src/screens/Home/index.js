import React from 'react';
import { View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const HomeScreen = (props) => {
    return (
        <View>
            <ImageBackground 
            source={require('../../../assets/images/wallpaper-home.png')} 
            style={styles.image}
            >

                <Pressable 
                style={styles.searchButton} 
                onPress={ () => console.warn('Search Btn a fost apasat')}
                >
                        <Fontisto name="search" size={25} color={"#f15454"} />
                        <Text style={styles.searchButtonText}>What's the area?</Text>
                </Pressable>


                <Text style={styles.title}>Go  Play</Text>

                <Pressable 
                style={styles.button} 
                onPress={ () => console.warn('Explore Btn a fost apasat')}>
                    <Text style={styles.buttonText}>Explore nearby places</Text>
                </Pressable>

            </ImageBackground>
        </View>
    );
};

export default HomeScreen;