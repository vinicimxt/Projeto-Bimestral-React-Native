import { StyleSheet } from 'react-native';

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

  searchInput: {
    width: '55%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    backgroundColor: '#fff', // Adicione uma cor de fundo para a barra de pesquisa
    borderRadius: 20, 
  },
  

  header: {
    fontSize: 125,
    color: 'purple',
    fontFamily: 'Arial', // Fonte nativa do sistema
  },
  
  welcome: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
  },

  description: {
    fontSize: 16,
    color: '#fff',
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
    width: 150,
    height: 150,
    marginHorizontal: 5, // Espaço de 1 cm = 10 dp, aqui usando 5 dp para balancear o layout
  },

  largeImage: {
    width: 200,
    height: 200,
    marginHorizontal: 5,
  },

  sub: {
    fontSize: 20,
    color: '#fff',
    marginVertical: 10,
    fontFamily: 'Arial',
  },
  
  //--------------------------------- STYLE DETALHES ---------------------------
  
  containerDetails: {
    flex: 1,
    backgroundColor: '#993399',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //------------------------------------- STYLE DE LOGIN ---------------

  containerLogin: {
    flex: 1,
    backgroundColor: '#fafad2',
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
  },
  
  inputSenha: {
    width: '40%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },

  // -------------------------- STYLE SOBRE NOS -----------------
  
  containerSobreNos: {
    flex: 1,
    backgroundColor: '#cf9bcc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
