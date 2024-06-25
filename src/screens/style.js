import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
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
  
  containerCatalogo: {
    paddingTop: 50,
  },

  header: {
    fontSize: 90,
    color: 'purple',
    fontFamily: 'Arial', // Fonte nativa do sistema
  },
  
  welcome: {
    fontSize: 40,
    color : '#9932cc',
    marginVertical: 10,
  },

  description: {
    fontSize: 30,
    color : '#9932cc',
    textAlign: 'center',
    marginVertical: 10,
  },

  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    paddingLeft: 10,
  },

  smallImage: {
    width: '50%',
    height: '60%',
    marginHorizontal: 5, // Espaço de 1 cm = 10 dp, aqui usando 5 dp para balancear o layout
  },

  largeImage: {
    width: width * 0.09,
    height: height * 0.3,
    marginHorizontal: 5,
  },

  sub: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    fontFamily: 'Arial',
    textAlign: 'center',
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
    fontSize: 20,
  },
  h1Details :{
    color : '#9932cc',
    fontSize: 30,
    
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
  
  inputUser: {
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

  inputOpiniao: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color : 'white',
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
    fontSize : 22,
  },

  imageFotos: {
    borderRadius : 100,
    width : 150,
    height : 150,
  },


  // -------------------------- STYLE MOVIE -----------------
  containerMovie: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  containerComentarios: {
    borderColor: "#8338ec",
    border: 5,
    paddingTop: 20,
  },

  imageFilme: {
    width: width * 0.09,
    height: height * 0.3,
    marginHorizontal: 5,
  },

  textMovie: {
    fontSize: 40,
    color: 'purple',
    fontFamily: 'Arial',
    paddingRight: 10,
  },

  textDescricao: {
    fontSize: 10,
    color: 'white',
    fontFamily: 'Arial',
  },

  textFeedback: {
    fontSize: 25,
    paddingBottom: 10,
    paddingTop: 20,
    color: 'white',
    fontFamily: 'Arial',
  },

  textFeedbackStar: {
    fontSize: 10,
    paddingBottom: 10,
    paddingTop: 10,
    color: 'white',
    fontFamily: 'Arial',
  },

  textSinopseHeader: {
    fontSize: 25,
    color: 'white', //test
    fontFamily: 'Arial',
  },

  textSinopse: {
    fontSize: 15,
    color: 'white', //test
    fontFamily: 'Arial',
  },

  textComentariosHeader: {
    fontSize: 30,
    color: 'purple', //test
    fontFamily: 'Arial',
    paddingBottom: 15,
  },

  textComentarios: {
    fontSize: 15,
    color: 'white', //test
    fontFamily: 'Arial',
    paddingBottom: 10,
  },

  InputFeedback: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color : 'white',
  },

  buttonFeedback: {
    paddingTop : 10,
    paddingLeft : 10,
  },
  
  //-----------------------------------------------------------------------STYLE PAGINA FAVORITOS------------------------------------------------------

container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
},

textFav :{
  fontSize: 60,
  color: 'purple',
  fontFamily: 'Arial', 
  paddingBottom: 20,
},

textMovieFav: {
  fontSize: 30,
  color: 'gold',
  fontFamily: 'Arial',
  paddingRight: 10,
},



});

export default styles;
