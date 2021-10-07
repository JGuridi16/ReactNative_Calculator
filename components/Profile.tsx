import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require('../assets/profile.jpg')} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.tittle}>Nombre:</Text>
                <Text style={[styles.text, { color: '#000', fontWeight: 'bold' }]}>
                    Jacsel Guridi Diaz
                </Text>
                <Text style={styles.tittle}>Correo:</Text>
                <Text style={[styles.text, { color: 'blue' }]}>
                    jacselguridi.dev@hotmail.com
                </Text>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    text: {},
    container: {
        padding: 10,
        paddingTop: 50,
        flexDirection: 'row'
    },
    imageContainer: {
        paddingHorizontal: 10,
    },
    image: {
        width: 100,
        height: 100,
    },
    tittle: {
        fontWeight: 'bold',
        color: '#8E8E8E'
    },
    textContainer:{}
});