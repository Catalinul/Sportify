import React from 'react';
import { View, ImageBackground, Text, Pressable} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { useNavigation  } from '@react-navigation/native'; // trebuie important hook-ul asta pt avea acces la navigation object

const HomeScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View>
            <ImageBackground 
            source={require('../../../assets/images/wallpaper-home.png')} 
            style={styles.image}
            >

                <Pressable 
                style={styles.searchButton} 
                onPress={ () => navigation.navigate('Destination Search')}
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