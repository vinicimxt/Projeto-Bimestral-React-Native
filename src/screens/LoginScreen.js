import React, { useState } from 'react';
import { Button, View,  Text, TextInput, Alert,ImageBackground} from 'react-native';
import styles from './style';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

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
            <Text>Você está em Login</Text>
            <Text>Email</Text>
            <TextInput
                style={styles.inputEmail}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                keyboardType="Email-address"
                autoCapitalize="none"
            />
            <Text>Senha</Text>
            <TextInput
                style={styles.inputSenha}
                value={Password}
                onChangeText={setPassword}
                placeholder="Senha"
                secureTextEntry
            />
            <View style={styles.button}>

            <Button style={styles.titleLogin}
                title="Acessar"
                onPress={handleLogin}
            /> <br></br>
            <Button style={styles.titleLogin}
                title="Recuperar senha"
                onPress={() => navigation.navigate('Recuperar senha')}
            /><br></br>
            <Button
                title="Cadastrar"
                onPress={()=> navigation.navigate(Cadastrar)}
            />
            </View>
        </View>
        </ImageBackground>
    );
};

export default LoginScreen;

