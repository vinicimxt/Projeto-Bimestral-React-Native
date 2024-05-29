import {  StyleSheet } from 'react-native';

const styles = StyleSheet.create({
   
  //----------------------------        STYLE DA HOME-----------------------

    containerHome:{
    backgroundColor : "#b8cad4",
    alignItems : "center",
    justifyContent : "center",
    },

    //--------------------------------- STYLE DETALHES ---------------------------
 containerDetails:{
        flex:1,
        backgroundColor : "#993399",
        alignItems : "center",
        justifyContent : "center",
 },
//-------------------------------------  STYLE DE LOGIN  ---------------

    containerLogin: {
            flex: 1,
            backgroundColor: "#fafad2",
            alignItems: "center",
            justifyContent: "center",
            padding: 16
        },
     inputEmail: {
            width: '40%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 8
        },
        inputSenha: {
            width: '40%',
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 12,
            paddingHorizontal: 8
        },


        // --------------------------     STYLE SOBRE NOS  -----------------
        containerSobreNos:{
            flex:1,
            backgroundColor : "#cf9bcc",
            alignItems : "center",
            justifyContent : "center",
        
            
        },
      
        
    })

export default styles
