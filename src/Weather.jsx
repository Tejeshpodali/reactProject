import { useState } from "react";
import axios from "axios";

function Weather() {
    const [city, setCity] = useState("");
    const [data, setData] = useState(null);

    const apikey = "91fb7b0fce7d8d511ddc5f831700fcde";

    const handleChange = (e) => {
        setCity(e.target.value);
    };

    const getWeather = () => {
        if (!city.trim()) {
            alert("Please enter a city");
            return;
        }

        axios
            .get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`
            )
            .then((res) => setData(res.data))
            .catch(() => {
                alert("City not found");
                setData(null);
            });
    };

    return (
        <>
            <h1 className="title">Weather Forecasting</h1>

            <div className="WeatherContainer">
                <input
                    type="text"
                    value={city}
                    onChange={handleChange}
                    placeholder="Enter city"
                />

                <button onClick={getWeather}>Get Weather</button>

                {data && (
                    <>
                        <p><b>City:</b> {data.name}</p>
                        <p><b>Temperature:</b> {data.main.temp} °C</p>
                    </>
                )}
            </div>
        </>
    );
}

export default Weather;
