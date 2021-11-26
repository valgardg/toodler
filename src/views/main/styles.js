import {StyleSheet} from 'react-native';
import { uglypink, darkblue } from '../../styles/colors'; 

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 100,
        backgroundColor: uglypink,
        alignItems: 'center',
    },
    image: {
        marginTop: 30,
        width: 500,
        height: 500,
    },
    name: {
        marginTop: 2,
        fontWeight: "bold",
        fontSize: 70,
        textAlign: 'center'
    },
    button: {
        marginTop: 100,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 60,
        paddingRight: 60,
        borderColor: 'black',
        borderWidth: 7,
        borderRadius: 30

    },
    buttontext: {
        fontWeight: "bold",
        fontSize: 40,
        textAlign: 'center'

    }
});
