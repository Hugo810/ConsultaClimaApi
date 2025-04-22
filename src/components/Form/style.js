import { StyleSheet } from "react-native";

export default StyleSheet.create({
    // Container principal
    formContext: {
        flex: 1,
        width: "100%",
        backgroundColor: "#f0f8ff", // Fundo azul claro suave
        alignItems: "center",
        paddingTop: 20,
        paddingHorizontal: 15,
    },

    // Container do formulário
    form: {
        width: "100%",
        maxWidth: 400, // Limita a largura em dispositivos grandes
    },

    // Título do campo
    formLabel: {
        color: "#2c3e50",
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
        marginLeft: 5,
    },

    // Campo de input
    input: {
        width: "100%",
        borderRadius: 12,
        backgroundColor: "#ffffff",
        height: 50,
        paddingHorizontal: 20,
        color: "#2c3e50",
        borderWidth: 1,
        borderColor: "#dfe6e9",
        marginBottom: 20,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    // Texto do botão
    textButton: {
        fontSize: 18,
        color: "#ffffff",
        fontWeight: "600",
        textAlign: "center",
    },

    // Botão principal
    button: {
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#3498db",
        paddingVertical: 16,
        marginVertical: 20,
        shadowColor: "#3498db",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation: 6,
    },

    // Container de resultados
    resultContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 12,
        padding: 20,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },

    // Mensagem de resultado
    resultMessage: {
        color: "#2c3e50",
        fontSize: 16,
        fontWeight: "500",
        marginBottom: 10,
        textAlign: "center",
    },

    // Valor da temperatura
    temperatureValue: {
        color: "#e74c3c",
        fontSize: 48,
        fontWeight: "700",
        textAlign: "center",
        marginVertical: 10,
    },

    // Sugestão de roupa
    clothingSuggestion: {
        color: "#7f8c8d",
        fontSize: 16,
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 10,
    },

    // Ícone do clima
    weatherIcon: {
        width: 120,
        height: 120,
        alignSelf: "center",
        marginVertical: 10,
    },
});