import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({

    container: {
        margin: 20
    }, 

    textInput: {
        fontSize: 20, 
        marginBottom: 20,
    },

    row: {
        flexDirection: 'row', //pt a afisa iconita si textul pe acelasi rand
        alignItems: 'center', 
        paddingVertical: 15, // spatii intre randuri
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },

    iconContainer:{
        backgroundColor: '#d4d4d4',
        padding: 5,
        borderRadius: 10,
        marginRight: 15,
    },

    locationText: {
        color: "black"
    }

 
});
 
export default styles;