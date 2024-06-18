import React from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone de pesquisa
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
        <View style={styles.searchContainer}> {/* Novo container para a barra de pesquisa */}
          <Icon name="search" size={20} color="purple" style={styles.searchIcon} /> {/* Ícone de pesquisa */}
          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar..."
            onChangeText={setSearchText}
            value={searchText}
          />
        </View>
        <Text style={styles.welcome}>SEJA BEM VINDO!</Text>
        <Text style={styles.description}>
          O objetivo do site é te ajudar a encontrar o filme ideal e ajudar outros cinéfilos com opniões criteriosas ;)
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

        <View style={styles.button}>
        <View style={styles.button1}>
        <Button  title ='detalhes' onPress={() => navigation.navigate('Detalhes')}  color="purple"/>
        </View>

        <View style={styles.button2}>
        <Button  title='Login'  onPress={() => navigation.navigate('Login')} />
        </View>
          
        <View style={styles.button3}> 
        <Button  title='Sobre nós'  onPress={() => navigation.navigate('Sobre nos')} />
        </View>
        </View>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
