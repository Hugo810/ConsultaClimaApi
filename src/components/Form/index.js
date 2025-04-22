import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./style";
import { getWeather } from "../Services/api";
import Result from "../Result";

export default function Form() {
    const [cidade, setCidade] = useState(null);
    const [msg, setMsg] = useState(null);
    const [temperatura, setTemperatura] = useState(null);
    const [sugestao, setSugestao] = useState(null);
    const [icone, setIcone] = useState(null);

    // Função assíncrona que será chamada no clique do botão
    async function buscarClima() {
        if (cidade) {
            // Aqui fazemos a chamada para a API
            const [temp, condicao, descricao, iconUrl, mensagem] = await getWeather(cidade);
            setMsg(mensagem);

            if (temp !== null) {
                setTemperatura(temp + "°C");
                setIcone(iconUrl); // Aqui define a URL da imagem

                // Sugestões baseadas na condição do clima
                switch (condicao) {
                    case "rain":
                        setSugestao("Leve um guarda-chuva!");
                        break;
                    case "clear":
                        setSugestao("Use roupas leves!");
                        break;
                    case "clouds":
                        setSugestao("Pode esfriar um pouco, leve um casaco.");
                        break;
                    case "snow":
                        setSugestao("Vista roupas de frio!");
                        break;
                    default:
                        setSugestao("Esteja preparado para o clima atual.");
                }
            }
        } else {
            setMsg("Digite o nome da cidade");
        }
    }

    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Cidade</Text>
                <TextInput
                    style={styles.input}
                    value={cidade}
                    onChangeText={setCidade}
                    placeholder="Ex: São Paulo"
                    placeholderTextColor="#ffffff"
                />
                <TouchableOpacity style={styles.button} onPress={buscarClima}>
                    <Text style={styles.textButton}>Buscar Clima</Text>
                </TouchableOpacity>

                {/* Passando a variável icone para o componente Result */}
                <Result msg={msg} valor={temperatura} sugestao={sugestao} icone={icone} />
            </View>
        </View>
    );
}
