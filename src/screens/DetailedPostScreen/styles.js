import { StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({

    container: {
        margin: 20,
    },

    image: {
        width: '100%',
        aspectRatio: 3 / 2,
        resizeMode: 'cover',
        borderRadius: 10,

    },

    facilityType: {
        marginVertical: 10,
        color: '#5b5b5b'
    },

    description: {
        fontSize: 18,
        lineHeight: 20
    },

    longDescription: {
        marginVertical: 20,
        fontSize: 16,
        lineHeight: 22,
        color: 'black'
    },

    prices: {
        fontSize: 18,
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