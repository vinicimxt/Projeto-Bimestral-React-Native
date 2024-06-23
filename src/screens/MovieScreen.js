import react, { useState } from 'react';
import { Button, View, Text, ImageBackground, TextInput, Image } from 'react-native';
import styles from './style';

const MovieScreen = ({ navigation }) => {
    const [feedback, setFeedback] = useState('');

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
                        style={styles.imageFilme} />
                    <Text style={styles.textSinopse}>Sinopse</Text>
                </View>

                <Text style={styles.textFeedback}>Dê o seu feedback</Text>
                <Text>Nota em estrelas</Text>
                <TextInput style={styles.InputFeedback}></TextInput>
                <Button style={styles.buttonFeedback}></Button>

            </View>
        </ImageBackground>
    )
};

export default MovieScreen;