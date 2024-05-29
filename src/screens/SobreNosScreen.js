import { Button , View ,Text} from 'react-native';
import styles from './style';

const SobreNosScreen = ({navigation}) =>{
    return(
        <View style={styles.containerSobreNos}>
            <h1>Sobre Nós</h1>
            <br></br> <h4>Dev - Luquinas,17 anos, Minha cara de inocente engana,AHH MULHER QUE ME DEIXA NO PONTA DO PÉ😎 </h4> <img src='fotos/luc.jpg' width={103} displayflex></img><br></br>
            <br></br> <h4>Dev - Deborah,20 anos, desenvolvedora de segunda a quinta,Sexta nem me chama para trabalhar,#EuSouRolezera😜 </h4> <img src='fotos/deb.jpg' width={103}></img> <br></br>
            <br></br> <h4>Dev - Vini,25 anos, posso te dar um código em forma de anabolizantes,vocÊ quer uma dose de DECA??💪🏻💉 </h4> <img src='fotos/vini.jpg' width={103}></img> <br></br>

            <Button
                title='Home'
                onPress={ () =>navigation.navigate('Home')}
            />
        </View>
    );
}

export default SobreNosScreen

