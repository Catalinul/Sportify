import React, {useState} from 'react'; //useState - hook
import { View, Text, TextInput, FlatList, Pressable} from 'react-native';
import styles from './styles.js';

import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style = {styles.container}>
            {/*Input component*/}

                 <GooglePlacesAutocomplete

                    placeholder='Search for locations'

                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);

                        navigation.navigate('Guests', { viewport: details.geometry.viewport });
                    }}

                    fetchDetails //mult mai detalii in consola (debugger)

                    query={{
                        key: 'AIzaSyBtBJorPZj2PQyFmnVRY3SmyyMKC8JC8o8',
                        language: 'en',
                    }}
                    
                    styles = {{
                        textInput: styles.textInput
                    }}

                    suppressDefaultStyles //ca sa nu mosteneasca styles de la parent, ci doar pe ale mele

                    renderRow = { (item)  => <SuggestionRow item = {item} />}
                />    

        </View>
    );
};
 
export default DestinationSearchScreen;