import React, {useState} from 'react'; //folosesc hook-ul useState pentru a tine evidenta numarului de adulti/copii etc
import { View, Text, Pressable } from 'react-native';
import styles from './styles.js'; 

import { NavigationHelpersContext, useNavigation } from '@react-navigation/native';

const GuestsScreen = (props) => {
    const [adults, setAdults] = useState(0); // adults - valoarea, setAdults - setter, 0 - valoare initiala 
    const [childrens, setChildrens] = useState(0); // la fel ca mai sus

    const navigation = useNavigation();

    return (
        <View style = {{justifyContent: 'space-between', height: '100%'}}>

            <View>
                {/* Row 1: Adults */}
                <View style = {styles.row} > 

                    {/* Titles */}
                    <View> 
                        <Text style={{fontWeight: 'bold', color: 'black'}}>Adults</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 13 or above</Text>
                    </View>

                    {/* Buttons with value */}
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        {/* minus button */}
                        <Pressable 
                            onPress = { () => setAdults(Math.max(0, adults - 1)) }
                            style = {styles.button}>
                            <Text style={{fontSize: 20, color: 'black'}}> - </Text>
                        </Pressable>

                        {/* value */}
                        <Text style= {{ marginHorizontal: 20, fontSize: 20}}> {adults} </Text> 
                        {/* {adults} vine de la useState initializat la inceput */}

                        {/* plus button */}
                        <Pressable 
                            onPress = { () => setAdults(adults + 1)  }
                            style = {styles.button}>
                            <Text style={{fontSize: 20, color: 'black'}}> + </Text>
                        </Pressable>
                    </View>

                </View>

                {/* Row 2: Children */}
                <View style = {styles.row} > 

                    {/* Titles */}
                    <View> 
                        <Text style={{fontWeight: 'bold', color: 'black'}}>Childrens</Text>
                        <Text style={{color: '#8d8d8d'}}>Ages 2 - 12</Text>
                    </View>

                    {/* Buttons with value */}
                    <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                        {/* minus button */}
                        <Pressable 
                            onPress = { () => setChildrens(Math.max(0, childrens - 1)) }
                            style = {styles.button}>
                            <Text style={{fontSize: 20, color: 'black'}}> - </Text>
                        </Pressable>

                        {/* value */}
                        <Text style= {{ marginHorizontal: 20, fontSize: 20}}> {childrens} </Text> 
                        {/* {adults} vine de la useState initializat la inceput */}

                        {/* plus button */}
                        <Pressable 
                            onPress = { () => setChildrens(childrens + 1)  }
                            style = {styles.button}>
                            <Text style={{fontSize: 20, color: 'black'}}> + </Text>
                        </Pressable>
                    </View>

                </View>
            </View>

            <Pressable 
            onPress = { ( ) => navigation.navigate("Home", {
                screen: "Explore",
                params: {
                    screen: "SearchResults",
                    //parametrii pentru filtrare api graphql
                    params: {
                        screen: 'list', //am luat numele asta din serachresultabnavigator
                        guests: adults + childrens
                    }
                        }
                })
                     }
            style = {styles.searchButton} > 
                <Text style = {styles.searchText}> Search </Text>
            </Pressable>
        
        </View>
    );
};
 
export default GuestsScreen;