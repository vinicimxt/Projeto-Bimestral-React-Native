import React from 'react';
import { Button, View, Text, ImageBackground, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone de pesquisa
import styles from './style';
import { text } from 'cheerio';

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
          O objetivo do site é te ajudar a encontrar o filme ideal e ajudar outros cinéfilos com opniões criteriosas ;
        </Text>
        <View style={styles.imageRow}>
          <Image
            source={{ uri: './catalogos_filmes/zona.jpg' }}
            style={styles.smallImage}
          />

          <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
            <Image
              source={{ uri: './catalogos_filmes/furiosa.png' }}
              style={styles.largeImage}
            />
          </TouchableOpacity>

          <Image
            source={{ uri: './catalogos_filmes/images.jpg' }}
            style={styles.smallImage}
          />
        </View>

        <View style={styles.button}>
          <View style={styles.button1}>
            <Button title='detalhes' onPress={() => navigation.navigate('Detalhes')} color="purple" />
          </View>

          <View style={styles.button2}>
            <Button title='Login' onPress={() => navigation.navigate('Login')} color="purple" />
          </View>

          <View style={styles.button3}>
            <Button title='Sobre nós' onPress={() => navigation.navigate('Sobre nos')} color="purple" />
          </View>
        </View>

        <View style={styles.containerCatalogo}>
          <Text style={styles.sub}>Top 10 filmes mais vistos</Text>

          <View style={styles.imageRow}>
            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://musicart.xboxlive.com/7/4d4d6500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080' }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img3.acsta.net/pictures/19/04/26/17/30/2428965.jpg' }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img2.acsta.net/medias/nmedia/18/89/56/94/20055685.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://images.justwatch.com/poster/249956665/s718/star-wars-o-despertar-da-forca.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://m.media-amazon.com/images/I/81zLDvpNlLL.AC_UF894,1000_QL80.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/89/43/82/20052140.jpg', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2uqpeoOTpA-Ub63OD5hznXIO-NyVluAO0A&s', }}
                style={styles.largeImage}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
              <Image
                source={{ uri: 'https://br.web.img3.acsta.net/pictures/19/10/14/15/18/1691494.jpg' }}
                style={styles.largeImage}
              />
            </TouchableOpacity>
          </View>
        </View>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
