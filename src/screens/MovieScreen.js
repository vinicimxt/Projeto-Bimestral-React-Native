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

                <Image
                    source={{ uri: './catalogos_filmes/zona.jpg' }}
                    style={styles.imageFilme} />

                <Text>Nota em estrelas</Text>
                <Text style={styles.textSinopse}>Sinopse</Text>
                <Text style={styles.textFeedback}>Dê o seu feedback</Text>
                <TextInput style={styles.InputFeedback}></TextInput>
                <Button style={styles.buttonFeedback}></Button>

            </View>
        </ImageBackground>
    )
};

export default MovieScreen;