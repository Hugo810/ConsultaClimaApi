export async function getWeather(cidade) {
    try {
        const apiKey = "ff517e2b0e24235229dddc1f7d3370a1";
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await response.json();

        if (response.ok) {
            const temperatura = data.main.temp;
            const condicao = data.weather[0].main.toLowerCase(); // "Rain", "Clear", etc.
            const descricao = data.weather[0].description; // "chuva leve", etc.
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

            return [temperatura, condicao, descricao, iconUrl, "Clima consultado com sucesso!"];
        } else {
            return [null, null, null, null, "Cidade não encontrada"];
        }
    } catch (error) {
        return [null, null, null, null, "Erro ao conectar com a API"];
    }
}
