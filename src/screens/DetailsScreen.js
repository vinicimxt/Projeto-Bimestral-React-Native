import react from 'react';
import { Button , View , Text,ImageBackground,} from 'react-native';
import styles from './style';

const DetailsScreen = ({navigation}) =>{
    return(
        <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }} 
      style={styles.background}
    >
        <View style={styles.containerDetails}>
            <h1 style={styles.h1Details}>Seja bem vindo ao FBMOVIES, Deixe sua opinião para o próximo ༼ つ ◕_◕ ༽つ </h1>

            <h2 style={styles.textDetails}> Uma plataforma para comentários sobre todos os tipos de filmes </h2><br></br>

<Text style={styles.textDetails}> O FBMOVIES é o site ideal para amantes de cinema compartilharem suas opiniões e descobrir novas perspectivas sobre os filmes que gostam. Você encontrará um local acolhedor e interativo onde cinéfilos de todo o mundo podem se reunir para compartilhar opiniões sobre variados de gêneros.<br></br>

<br></br>

Ao fornecer avaliações rápidas e críticas abrangentes sobre os filmes que você viu, você pode deixar sua marca na comunidade. Para obter uma visão geral de sua opinião, use nosso sistema de classificação de estrelas.
<br></br>

Construa seu perfil privado, onde você pode acompanhar todas as suas avaliações, ver suas listas de filmes favoritos e se conectar com outras pessoas.</Text>

        <View style={styles.button}>
        <View style={styles.button1}>
            <Button 
                title='Home'
                onPress={ () =>navigation.navigate('Home')} color="purple"
            />
        </View>
        <View style={styles.button2}>    
            <Button
                title='Deixe sua opinião'
                onPress={ () =>navigation.navigate('Deixe sua opinião')} color="purple"
            />
        </View>
        </View>


        </View>
        </ImageBackground>
    );
}

export default DetailsScreen

