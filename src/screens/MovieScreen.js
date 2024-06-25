import React, { useState } from 'react';
import { Button, View, Text, ImageBackground, TextInput, Image, Alert, TouchableOpacity } from 'react-native';
import StarRating from './StarRating'; // Importe o componente de estrelas
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style';

const MovieScreen = ({ route, navigation }) => {
    const { movie } = route.params;
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0); // Estado para armazenar a avaliação atual
    const [enviado, setEnviado] = useState(false);
    const [favoritado, setFavoritado] = useState(false);

    const toggleFavoritar = () => {
        setFavoritado(!favoritado);
    };

    const handleEnviar = () => {
        setEnviado(true);
        Alert.alert('Enviado com sucesso', 'Seu feedback foi enviado com sucesso!');
    };

    const handleStarPress = (rating) => {
        // Função para lidar com a alteração da avaliação
        setRating(rating);
    };

    return (
        <ImageBackground
            source={{ uri: './fotos/FundoHome.png' }}
            style={styles.background}
        >
            <View style={styles.containerMovie}>

                <View style={styles.imageRow}>
                    <Text style={styles.textMovie}>{movie.name}</Text>
                    <TouchableOpacity onPress={toggleFavoritar}>
                        <Icon
                            name={favoritado ? 'star' : 'star-o'}
                            size={30}
                            color={favoritado ? 'gold' : 'gray'}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.imageRow}>
                    <Image
                        source={{ uri: movie.uri }}
                        style={styles.imageFilme}
                    />
                    <View style={styles.viewSinopse}>
                        <Text style={styles.textSinopseHeader}>Sinopse</Text>
                        <Text style={styles.textSinopse}>{movie.sinopse}</Text>
                    </View>
                </View>

                <Text style={styles.textFeedback}>Dê o seu feedback</Text>
                <StarRating rating={rating} onStarPress={handleStarPress} />

                <Text style={styles.textFeedbackStar}>Nota em estrelas: {rating}/5</Text>

                <TextInput
                    style={styles.InputFeedback}
                    value={feedback}
                    onChangeText={setFeedback}
                    placeholder="Digite seu feedback aqui..."
                    multiline
                />

                <View style={styles.button2}>
                    <Button
                        title="Enviar"
                        onPress={handleEnviar}
                        color="purple"
                    />
                </View>

                {enviado && (
                    <Text style={{ color: 'green', marginTop: 10 }}>Enviado com sucesso!</Text>
                )}

            </View>
        </ImageBackground>
    );
};

export default MovieScreen;
