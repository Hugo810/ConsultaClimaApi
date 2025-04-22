import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textTitle: {
        color: "#1967d2",
        fontSize: 28,
        fontWeight: "bold",
        textShadowColor: 'rgba(25, 103, 210, 0.2)',
        textShadowOffset: {width: 0, height: 2},
        textShadowRadius: 4,
        textAlign: 'center', // Centraliza o texto
        width: '100%' // Garante que o texto ocupe toda a largura
    },
    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        padding: 20,
        //borderRadius: 20,
        marginTop: 100, // Ajuste este valor conforme necessário
        marginBottom: 15, // Mantém a margem inferior
        shadowColor: "#1967d2",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 8,
        borderWidth: 1,
        borderColor: "rgba(25, 103, 210, 0.1)",
        margin: 15,
        width: "100%", // Ocupa 100% da largura do container pai
        alignSelf: 'stretch', // Estica horizontalmente
        marginHorizontal: 0, // Remove margens laterais se necessário
    }
});

export default styles;