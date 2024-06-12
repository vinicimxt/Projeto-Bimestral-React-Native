import react from 'react';
import { Button , View , Text,ImageBackground} from 'react-native';
import styles from './style';

const DetailsScreen = ({navigation}) =>{
    return(
        <ImageBackground
      source={{ uri: './fotos/FundoHome.png' }} 
      style={styles.background}
    >
        <View style={styles.containerDetails}>
            <h1 style={styles.h1Details}>Bem vindos ao MOOVIE FeedBack,Deixe sua opinião para o proximo ༼ つ ◕_◕ ༽つ </h1>

            <Text style={styles.textDetails}>MOOVIE FEEDBACK: Uma plataforma para comentários sobre cinema <br></br>

Bem-vindo ao MOOVIE FEEDBACK, o site ideal para amantes de cinema compartilhar suas opiniões e descobrir novas perspectivas sobre os filmes que gostam. Você encontrará um local acolhedor e interativo onde cinéfilos de todo o mundo podem se reunir para compartilhar opiniões e opiniões sobre uma variedade de gêneros e épocas do cinema.<br></br>

<br></br>

Ao fornecer avaliações rápidas e críticas abrangentes sobre os filmes que você viu, você pode deixar sua marca na comunidade. Para obter uma visão geral de sua opinião, use nosso sistema de classificação de estrelas.
<br></br>

Construa seu perfil privado, onde você pode acompanhar todas as suas avaliações, ver suas listas de filmes favoritos e se conectar com outras pessoas.</Text>

        <View style={styles.button}>
            <Button 
                title='Home'
                onPress={ () =>navigation.navigate('Home')}
            />
            <br></br>
            <Button
                title='Deixe sua opinião'
                onPress={ () =>navigation.navigate('Deixe sua opinião')}
            />
        </View>
        </View>
        </ImageBackground>
    );
}

export default DetailsScreen

