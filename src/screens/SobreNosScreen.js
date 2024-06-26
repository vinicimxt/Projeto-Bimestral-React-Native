import React from 'react';
import { Button , View ,Text,ImageBackground,Image,ScrollView} from 'react-native';
import styles from './style';

const SobreNosScreen = ({navigation}) =>{
    return(
        <ImageBackground
              source={{ uri: './fotos/FundoHome.png' }} 
              style={styles.background}
    >
        <ScrollView>
        <View style={styles.containerSobreNos}>
            <h1>Sobre Nós</h1>
            <br></br> 
            
            <pre>
            <Image
                source={{uri : './fotos/luc.jpg'}}
                style={styles.imageFotos}
            /> <Text style={styles.textSobre}>Dev - Luquinhas, 17 anos, Minha cara de inocente engana, AHH MULHER QUE ME DEIXA NO PONTA DO PÉ😎 </Text> 
            <br></br>
            <br></br>
            
             <Image
                source={{uri : './fotos/deb.jpg'}}
                style={styles.imageFotos}
            /> <Text style={styles.textSobre}>Dev - Deborah, 20 anos, desenvolvedora de segunda a quinta, Sexta nem me chama para trabalhar,#EuSouRolezera😜 </Text>
            <br></br>
            <br></br>
            
            <Image
                source={{uri : './fotos/vini.jpg'}}
                style={styles.imageFotos}
            /> <Text style={styles.textSobre}>Dev - Vini,25 anos, posso te dar um código em forma de anabolizantes, vocÊ quer uma dose de DECA??💪🏻💉 </Text>
            <br></br>
            <br></br>
            
            <Image
                source={{uri : './fotos/pequeno.jpg'}}
                style={styles.imageFotos}
            /> <Text style={styles.textSobre}>Dev - Lucas P, Música, filmes cinema, coisas de cultura dark romance, escrever meus pensamentos, ler sobre filosofia ou algum livro.📚🎶</Text> 
            <br></br>
            <br></br>
            
              <Image
                source={{uri : './fotos/gab.jpg'}}
                style={styles.imageFotos}
            /> <Text style={styles.textSobre}>Dev - Gabriel, 25 anos, Lindo,perfeito,carismatico, e desenvolvedor nas horas vagas😍 </Text> 
            </pre>

            <View style={styles.button}>
            <Button 
                title='Home'
                onPress={ () =>navigation.navigate('Home')} color ="purple"
                
            />
            </View>
        </View>
        </ScrollView>
        </ImageBackground>
    );
}

export default SobreNosScreen

