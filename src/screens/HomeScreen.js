import { Button, View, Text } from 'react-native';
import styles from './style';

const HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.containerHome}>
            <h1>MOOVIE BACK</h1>
            <br></br> <Text> SEJA BEM VINDO</Text> <br></br>
            <h2>Olá nosso site será baseado em feedback de filmes,series,animes entre outros.</h2>
            <br></br>
            <img src='https://pbs.twimg.com/profile_images/1501256687910408192/Vb-5deew_400x400.jpg' class='imagem' width={200}></img>
            <br></br>
              
            <Button
                title='Detalhes'
                onPress={ ()=>navigation.navigate('Detalhes')}
            />
            <br></br>
            <Button
                title='Login'
                onPress={ () =>navigation.navigate('Login')}
            />
            <br></br>
            <Button
                title='Sobre nos'
                onPress={ () =>navigation.navigate('Sobre nos')}
            />
            
        </View>
    );
}

export default HomeScreen

