import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import kiddo from '../../resources/kiddo.png';
import styles from './styles';

const Main = () => {
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={kiddo} />
        <Text style={styles.name}> Toodler</Text>
        <TouchableHighlight style={styles.button}>
            <Text style={styles.buttontext}> Boards</Text>
        </TouchableHighlight>
    </View>
    );
};

export default Main;