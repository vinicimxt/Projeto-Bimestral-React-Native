import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Importe os ícones necessários
import styles from './style';

const DetailsScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }}
      style={styles.background}
    >
      <View style={styles.containerDetails}>
        <Text style={styles.h1Details}>
          Seja bem vindo ao FBMOVIES, Deixe sua opinião para o próximo ༼ つ ◕_◕ ༽つ
        </Text>
        <Text style={styles.textDetails}>
          Uma plataforma para comentários sobre todos os tipos de filmes
        </Text>

        <Text style={styles.textDetails}>
          O FBMOVIES é o site ideal para amantes de cinema compartilharem suas
          opiniões e descobrir novas perspectivas sobre os filmes que gostam.
          Você encontrará um local acolhedor e interativo onde cinéfilos de
          todo o mundo podem se reunir para compartilhar opiniões sobre
          variados de gêneros.
        </Text>

        <Text style={styles.textDetails}>
          Ao fornecer avaliações rápidas e críticas abrangentes sobre os filmes
          que você viu, você pode deixar sua marca na comunidade. Para obter
          uma visão geral de sua opinião, use nosso sistema de classificação de
          estrelas.
        </Text>

        <Text style={styles.textDetails}>
          Construa seu perfil privado, onde você pode acompanhar todas as suas
          avaliações, ver suas listas de filmes favoritos e se conectar com
          outras pessoas.
        </Text>

        <View style={styles.button}>
          <View style={styles.button1}>
            <FontAwesome5.Button
              name="home"
              backgroundColor="purple"
              onPress={() => navigation.navigate('Home')}
            >
              Home
            </FontAwesome5.Button>
          </View>
          <View style={styles.button2}>
            <FontAwesome5.Button
              name="comment"
              backgroundColor="purple"
              onPress={() => navigation.navigate('Deixe sua opinião')}
            >
              Deixe sua opinião
            </FontAwesome5.Button>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default DetailsScreen;
