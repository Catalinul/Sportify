import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },

    button: {
        backgroundColor: '#ffff',
        width: 200,
        height: 40,
        marginTop: 25,
        marginLeft: 25,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

    searchButton: {
        backgroundColor: '#ffff',
        height: 50,
        width: Dimensions.get('screen').width - 20, //20 vine de la marginHorizontal * 2
        borderRadius: 20,
        marginHorizontal: 10,
        flexDirection: 'row',  /*search icon-ul si textul vor putea sa stea pe acelasi rand*/
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 25,
        zIndex: 100, /*ca sa apara peste imagine*/
    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    },

});

export default styles;