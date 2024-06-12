import React from 'react';
import { Button , View ,Text,ImageBackground} from 'react-native';
import styles from './style';

const SobreNosScreen = ({navigation}) =>{
    return(
        <ImageBackground
              source={{ uri: './fotos/FundoHome.png' }} 
              style={styles.background}
    >
        <View style={styles.containerSobreNos}>
            <h1>Sobre Nós</h1>
            <br></br> <Text style={styles.textSobre}>Dev - Luquinas,17 anos, Minha cara de inocente engana,AHH MULHER QUE ME DEIXA NO PONTA DO PÉ😎 </Text> <img src='fotos/luc.jpg' width={103} displayflex></img><br></br>
            <br></br> <Text style={styles.textSobre}>Dev - Deborah,20 anos, desenvolvedora de segunda a quinta,Sexta nem me chama para trabalhar,#EuSouRolezera😜 </Text> <img src='fotos/deb.jpg' width={103}></img> <br></br>
            <br></br> <Text style={styles.textSobre}>Dev - Vini,25 anos, posso te dar um código em forma de anabolizantes,vocÊ quer uma dose de DECA??💪🏻💉 </Text> <img src='fotos/vini.jpg' width={103}></img> <br></br>
            <View style={styles.button}>
            <Button 
                title='Home'
                onPress={ () =>navigation.navigate('Home')}
            />
            </View>
        </View>

        </ImageBackground>
    );
}

export default SobreNosScreen

