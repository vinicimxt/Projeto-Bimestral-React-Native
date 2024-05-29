import { React, useState } from "react";
import { TextInput, Text, View, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form()
{
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState("Calcular");

    function imcCalculator()
    {
        return setImc((weight/(height*height)).toFixed(2));
    }

    function validatorImc()
    {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight('')
            setWeight('')
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMessageImc("preencha o peso e a altura")
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput 
                    onChangeText={setHeight} 
                    placeholder="Ex.: 1.75" 
                    keyboardType="numeric" 
                    value={height}
                    style={styles.formInput}
                />

                <Text style={styles.formLabel}>Peso</Text>
                <TextInput 
                    onChangeText={setWeight} 
                    placeholder="Ex.: 67.5" 
                    keyboardType="numeric"
                    value={weight}
                    style={styles.formInput}
                />

                <TouchableOpacity
                    title={textButton} 
                    onPress={() => validatorImc()}
                    style={styles.formButton}
                >
                    <Text style={styles.formButtonText}>{textButton}</Text>
                </TouchableOpacity>
            </View>

            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}
