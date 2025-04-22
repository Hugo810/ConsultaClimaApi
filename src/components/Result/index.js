import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function Result(props) {
    return (
        <View style={styles.resultContainer}>
            {props.msg && <Text style={styles.resultMessage}>{props.msg}</Text>}

            {props.valor && (
                <Text style={styles.temperatureValue}>{props.valor}</Text>
            )}

            {props.icone && (
                <Image
                    source={{ uri: props.icone }}
                    style={styles.weatherIcon}
                    resizeMode="contain"
                />
            )}

            {props.sugestao && (
                <Text style={styles.clothingSuggestion}>{props.sugestao}</Text>
            )}
        </View>
    );
}
