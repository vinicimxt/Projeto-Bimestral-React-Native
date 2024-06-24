import React, { useState } from 'react';
import { Button, View, Text, ImageBackground, TextInput, Image, Alert } from 'react-native';
import StarRating from './StarRating'; // Importe o componente de estrelas
import styles from './style';

const MovieScreen = ({ navigation }) => {
    const [feedback, setFeedback] = useState('');
    const [rating, setRating] = useState(0); // Estado para armazenar a avaliação atual
    const [enviado, setEnviado] = useState(false);

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

                <Text style={styles.textMovie}>Nome do filme</Text>

                <View style={styles.imageRow}>
                    <Image
                        source={{ uri: './catalogos_filmes/furiosa.png' }}
                        style={styles.imageFilme}
                    />
                    <Text style={styles.textSinopse}>Sinopse</Text>
                </View>

                <Text style={styles.textFeedback}>Dê o seu feedback</Text>
                <StarRating rating={rating} onStarPress={handleStarPress} />

                <Text style={styles.textFeedback}>Nota em estrelas: {rating}/5</Text>

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
