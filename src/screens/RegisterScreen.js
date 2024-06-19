import React, { useState } from 'react';
import { Button, View,  Text, TextInput, Alert,ImageBackground} from 'react-native';
import styles from './style';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPassword,setConfirmPassword] = useState('');
    const [user,setUser] = useState('');
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
                style={styles.inputUser}
                value={user}
                onChangeText={setUser}
                placeholder="Usuário"
                keyboardType="Text"
                autoCapitalize="none"
            />

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
             <Text>Confirmar senha</Text>
            <TextInput
                style={styles.inputSenha}
                value={ConfirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirmar senha"
                secureTextEntry
            />

            <View style={styles.button}>

            <View style={styles.button1}>
            <Button style={styles.titleLogin}
                title="Voltar"
                onPress={() => navigation.navigate('Home')} color="purple"
            />
            </View> 


            <View style={styles.button3}>
            <Button 
                title="Cadastrar"
                onPress={()=> { if(email !== ''|| Password !== '' || ConfirmPassword !== '' || user !== '')
                    {
                        if(ConfirmPassword == Password){
                            navigation.navigate('Login')
                        }else 
                        {
                            Alert.alert('Cancel Pressed')
                        }
                    }}} color="purple"
            />
            </View>
            </View>

        </View>
        </ImageBackground>
    );
};

export default RegisterScreen;

