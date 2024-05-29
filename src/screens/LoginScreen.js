import React, { useState } from 'react';
import { Button, View,  Text, TextInput, Alert } from 'react-native';
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
            <Button
                title="Acessar"
                onPress={handleLogin}
            />
            <Button
                title="Recuperar senha"
                onPress={() => navigation.navigate('Recuperar senha')}
            />
        </View>
    );
};

export default LoginScreen;

