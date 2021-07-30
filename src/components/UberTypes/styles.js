import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        borderTopWidth: 1,
        borderColor: '#eee',
        marginTop: 10,
    },
    firstPart: {
        flexDirection: 'row',
        backgroundColor: 'lightgrey',
        // padding: 10,
        borderRadius: 30,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        paddingRight: 15,
        marginTop: 20,

    },
    rounded: {
        marginRight: 20,
        backgroundColor: 'black',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
     card: {
        marginTop: 20,
        marginLeft: 20,
         flex: 1,
     },
    text1: {
        fontWeight: '600',
        fontSize: 20,
    },
    text2: {

    },
    arrow: {
        marginTop: 20,
        width: 20,
        marginRight: 10,
    },
    button: {
        backgroundColor: 'black',
        padding: 20,
        margin: 10,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 30,
    },
    confirm: {
        color: 'white',
        fontWeight: 'bold',
    }

});

export default styles;
