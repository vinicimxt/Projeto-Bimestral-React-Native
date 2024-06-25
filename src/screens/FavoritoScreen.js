import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Ionicons';

const FavoritoScreen = ({ route, navigation }) => {
    const { movieFav } = route.params;


    return (
        <ImageBackground
            source={{ uri: './fotos/FundoHome.png' }}
            style={styles.background}
        >
            <View style={styles.containerLogin}>
                <Text style={styles.textFav}>Meus Favoritos</Text>


                <Text style={styles.textMovieFav}>{movieFav.nameFav}</Text>
                {/* <Image
                    source={{ uri: movieFav.uriFav }}
                    style={styles.imageFilme}
                /> */}

                <View style={styles.button}>

                    <View style={styles.button1}>
                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Icon name="home" size={30} color="purple" />
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </ImageBackground>
    );
};

export default FavoritoScreen;

