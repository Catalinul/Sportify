import React, {useState} from 'react'; //useState - hook
import { View, Text, TextInput, FlatList } from 'react-native';
import styles from './styles.js';
import Entypo from 'react-native-vector-icons/Entypo';


import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = (props) => {

    const [inputText, setInputText] = useState('') //inputText - valoare; setInputText - functia care o actualizeaza (setter)

    return (
        <View style = {styles.container}>

            {/*Input component*/}
            <TextInput  
            styles={styles.textInput}
            placeholder = "Search for locations"
            value = {inputText} // valoarea pt useState mai sus. o sa folosesc valoarea asta pt a o trimite catre google API, pt text recommendations
            onChangeText = {setInputText} // setter-ul pt useState de mai sus
            />

            

            {/* List of destination */}
            <FlatList 
                data = {searchResults}
                renderItem = {({item}) => (
                    <View style = {styles.row}>
                        <View style = {styles.iconContainer}>
                            <Entypo name = {"location-pin"} size = {30} />
                        </View>
                        <Text style = {styles.locationText}> {item.description} </Text>
                    </View>
                ) }
            />
        </View>
    );
};
 
export default DestinationSearchScreen;