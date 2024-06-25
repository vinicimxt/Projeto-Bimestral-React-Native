import React from 'react';
import { View, Text, ImageBackground, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe o ícone de pesquisa
import styles from './style';

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState('');


  return (
    <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }}
      style={styles.background}
    >
      <ScrollView>
        <View style={styles.containerHome}>
          <Text style={styles.header}>FBMOVIES</Text>
          <View style={styles.searchContainer}>
            <Icon name="search" size={20} color="purple" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Pesquisar..."
              onChangeText={setSearchText}
              value={searchText}
            />
          </View>
          <Text style={styles.welcome}>SEJA BEM VINDO!</Text>
          <Text style={styles.description}>
            O objetivo do site é te ajudar a encontrar o filme ideal e ajudar outros cinéfilos com opiniões criteriosas ;
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
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Detalhes')}>
              <Icon name="information-circle-outline" size={40} color="purple" />
            </TouchableOpacity>
            </View>


            <View style={styles.button2}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Login')}>
              <Icon name="person-circle-outline" size={40} color="purple" />
            </TouchableOpacity>
            </View>


            <View style={styles.button3}>
            <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Sobre nos')}>
              <Icon name="body-outline" size={36} color="purple" />
            </TouchableOpacity>
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

              <TouchableOpacity onPress={() => {
              navigation.navigate('Movie')}}>
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

          <View style={styles.containerCatalogo}>
            <Text style={styles.sub}>Filmes em cartaz</Text>
            <View style={styles.imageRow}>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLBTwS-8sK92dqAmj5VWXgL7c-7W1ZXazRfw&s' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
              navigation.navigate('Movie')}}>
                <Image
                  source={{ uri: 'https://www.cinesercla.com.br/Uploads/upload/75225b69-93a1-4ee3-9e62-c6c44e1279e3.jpeg' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodYJcunb6imHMl_sjP1MGfxZkag3l04QIdg&s', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlyTTmMxGnrWT88D1fCZwrkyfutuuj0jKJnA&s', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/clube-dos-vandalos/ddec5cf4-f1f2-42e8-addc-cb895fb4f528.webp', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://www.vitoriaparkshopping.com/wp-content/uploads/2024/05/harry-potther.jpg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://br.web.img2.acsta.net/pictures/23/11/08/13/46/4065511.png', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11640/filme_11640.jpg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/garfield-fora-de-casa/ae8c28e2-84af-44b6-a0d8-a4615684efab.webp', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://www.ucicinemas.com.br/Content/Upload/Filmes/Posters/11848/filme_11848.jpg' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>
              
            </View>
          </View>

          <View style={styles.containerCatalogo}>
            <Text style={styles.sub}>Animações</Text>
            <View style={styles.imageRow}>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/92/03/73/20176438.jpg' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
              navigation.navigate('Movie')}}>
                <Image
                  source={{ uri: 'https://br.web.img2.acsta.net/medias/nmedia/18/91/31/05/20139182.jpg' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNzngyVQ0Tlr2Q8NeCWqRMrrFEBFo-Kv-aYQ&s', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX3R0nqlh86xCVj4pGGeLb_X-1h6k7CTOFCg&s', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://odiariodeumcontadordehistorias.wordpress.com/wp-content/uploads/2017/05/howls-moving-castle.jpeg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo-kvUnEkh2SDxLrprCMZUUD4RrCG46tag-Q&s', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://br.web.img3.acsta.net/pictures/18/12/05/16/28/3718855.jpg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/91/05/36/20127436.jpg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/98/38/20123472.jpg', }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Movie')}>
                <Image
                  source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjrfZDfq-4haboAeXp0jRhu2lt1qX9sLbBg&s' }}
                  style={styles.largeImage}
                />
              </TouchableOpacity>
              
            </View>
          </View>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;
