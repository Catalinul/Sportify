import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({

    row: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        marginHorizontal: 20
    },

    button: {
        borderWidth: 1,
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'
    },

    searchButton: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },

    searchText: {
        fontSize: 19, 
        color: 'white', 
        fontWeight: 'bold'
    }
 
});
 
export default styles;