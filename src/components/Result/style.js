import { StyleSheet } from "react-native";

export default StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: "#1E1E1E",
        padding: 20,
        justifyContent: "center",
    },
    form: {
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 20,
    },
    formLabel: {
        fontSize: 18,
        color: "#fff",
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#fff",
        color: "#fff",
        marginBottom: 20,
    },
    button: {
        backgroundColor: "#5DB075",
        padding: 10,
        borderRadius: 5,
        alignItems: "center",
        marginBottom: 20,
    },
    textButton: {
        color: "#fff",
        fontSize: 16,
    },
    resultContainer: {
        alignItems: "center",
        marginTop: 20,
        backgroundColor: "#2C2C2C", // fundo levemente mais claro para destacar
        borderRadius: 10,
        padding: 15,
        elevation: 5, // sombra no Android
        shadowColor: "#000", // sombra no iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    
    resultMessage: {
        color: "#FFD700", // amarelo ouro para chamar atenção
        fontSize: 18,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    
    temperatureValue: {
        color: "#00BFFF", // azul vibrante
        fontSize: 42,
        fontWeight: "bold",
        marginVertical: 10,
    },
    
    clothingSuggestion: {
        color: "#FFFFFF", // branco puro
        fontSize: 16,
        marginTop: 10,
        textAlign: "center",
        fontStyle: "italic",
    },
    
    weatherIcon: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginVertical: 10,
    },
    
});
