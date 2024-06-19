import React, { useState } from 'react';
import { Button, View,  Text, TextInput, Alert,ImageBackground} from 'react-native';
import styles from './style';

const LoginScreen = ({ navigation }) => {
    const [email, setEmailRecuperar] = useState('');
   

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
                style={styles.inputEmail}
                value={email}
                onChangeText={setEmailRecuperar}
                placeholder="Email de recuperação"
                keyboardType="Email-address"
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
                title="Recuperar senha"
                onPress={() => navigation.navigate('Recuperar senha')} color="purple"
            />
            </View>

            </View>

        </View>
        </ImageBackground>
    );
};

export default LoginScreen;

