import React, { useState } from 'react';
import { Button, View,  Text, TextInput, Alert,ImageBackground} from 'react-native';
import styles from './style';
import { text } from 'cheerio';

const OpinionScreen = ({ navigation }) => {
    
    const [textOpiniao, setOpiniao] = useState('');

    const handleLogin = () => {
        if (email === ''|| Password === '') {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
        } else {
            navigation.navigate('Home');
        }
    };

    return (
        <ImageBackground
              source={{ uri: './fotos/FundoHome.png' }} 
              style={styles.background}
    >
        <View style={styles.containerLogin}>
            <Text>Você está em recuperar senha</Text>
            <Text>Email</Text>
            <TextInput
                style={styles.inputOpiniao}
                value={textOpiniao}
                onChangeText={setOpiniao}
                placeholder="Opinião sobre o filme"
                keyboardType="text"
                autoCapitalize="none"
            />
          

            <View style={styles.button}>

            <View style={styles.button1}>
            <Button style={styles.titleLogin}
                title="Voltar"
                onPress={() => navigation.navigate('Home')} color="purple"
            />
            </View> 

            <View style={styles.button2}>
            <Button style={styles.titleLogin}
                title="Enviar"
                onPress={() => navigation.navigate('Enviar')} color="purple"
            />
            </View>
            </View>

        </View>
        </ImageBackground>
    );
};

export default OpinionScreen;

