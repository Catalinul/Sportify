import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({

    container: {
        height: 120,
        padding: 5,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 10,
        
    },

    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
    },

    facilityType: {
        marginVertical: 10,
        color: '#5b5b5b'
    },

    description: {
        fontSize: 14,
    },

    prices: {
        fontSize: 15,
        marginVertical: 10,
    },

    oldPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'line-through'
    },
    
    newPrice: {
        fontWeight: 'bold',
        color: 'black'
    },

    totalPrice: {
        color: '#5b5b5b',
        textDecorationLine: 'underline'
    },
 
});
 
export default styles;