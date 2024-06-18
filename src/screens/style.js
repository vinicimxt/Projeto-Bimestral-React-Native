import { StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-web';

const styles = StyleSheet.create({
  //---------------------------- STYLE DA HOME -----------------------

  containerHome: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fundo semitransparente para melhorar a legibilidade
  },

  background: {
    flex: 1,
    resizeMode: 'cover',
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '55%',
    height: 40,
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff', // Adicione uma cor de fundo para a barra de pesquisa
    borderRadius: 20, 
    
  },
  
  searchInput :{
      width : '93%',
      height : '90%',
      
  },

  searchIcon: {
    marginRight: 10,
    marginLeft: 50, 
  },
  
  

  header: {
    fontSize: 90,
    color: 'purple',
    fontFamily: 'Arial', // Fonte nativa do sistema
  },
  
  welcome: {
    fontSize: 20,
    color : '#9932cc',
    marginVertical: 10,
  },

  description: {
    fontSize: 13,
    color : '#9932cc',
    textAlign: 'center',
    marginVertical: 10,
  },

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  smallImage: {
    width: '50%',
    height: '60%',
    marginHorizontal: 5, // Espaço de 1 cm = 10 dp, aqui usando 5 dp para balancear o layout
  },

  largeImage: {
    width: 140,
    height: 160,
    marginHorizontal: 5,
  },

  sub: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    fontFamily: 'Arial',
  },

button :{
  flexDirection : 'row',
},

  button1:{
    paddingLeft : 10,
    paddingTop : 10,
    
  },
  
  button2:{
    paddingTop : 10,
    paddingLeft : 10,
  },

  button3:{
    paddingTop : 10,
    paddingLeft : 10,
  },
  //--------------------------------- STYLE DETALHES ---------------------------
  
  containerDetails: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textDetails:{
    color : '#9932cc',
    textAlign: 'auto',
    paddingLeft: 80,
    paddingRight: 80,
  },
  h1Details :{
    color : '#9932cc',
  },

  

  //------------------------------------- STYLE DE LOGIN ---------------

  containerLogin: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  
  inputEmail: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color : 'white',
    
  },
  
  inputSenha: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color : 'white',
  },

  titleLogin: {
   
  },

  // -------------------------- STYLE SOBRE NOS -----------------
  
  containerSobreNos: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
  },
  textSobre:{
    color : '#9932cc',
    
  },
  imageFotos: {
    borderRadius : 80,
    width : 80,
    height : 80,
    
  }
  
});

export default styles;
