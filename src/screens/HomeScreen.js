import React from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput } from 'react-native';
import styles from './style';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState('');

  return (
    <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }} 
      style={styles.background}
    >
      <View style={styles.containerHome}>
        <Text style={styles.header}>FBMOVIES</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar..."
          onChangeText={setSearchText}
          value={searchText}
        />
        <Text style={styles.welcome}>SEJA BEM VINDO</Text>
        <Text style={styles.description}>
          Olá, nosso site é baseado em feedback de filmes.
        </Text>
        <View style={styles.imageRow}>
          <Image
            source={{ uri: './catalogos_filmes/zona.jpg' }}
            style={styles.smallImage}
          />
          <Image
            source={{ uri: './catalogos_filmes/furiosa.png' }}
            style={styles.largeImage}
          />
          <Image
            source={{ uri: './catalogos_filmes/images.jpg' }}
            style={styles.smallImage}
          />

        </View>
          <Text style={styles.sub}>Lançamentos</Text>
        <Button title='Detalhes' onPress={() => navigation.navigate('Detalhes')} />
        <Button title='Login' onPress={() => navigation.navigate('Login')} />
        <Button title='Sobre nós' onPress={() => navigation.navigate('Sobre nos')} />
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
