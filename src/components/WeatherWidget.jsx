import { useState, useEffect } from 'react';

export default function WeatherWidget() {
    const [weather, setWeather] = useState(null);
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lon: position.coords.longitude,
                    });
                },
                (err) => {
                    console.error(err);
                    // Default to New York if location denied
                    setLocation({ lat: 40.7128, lon: -74.0060 });
                    // setError("Location access denied.");
                }
            );
        } else {
            setError("Geolocation not supported.");
        }
    }, []);

    useEffect(() => {
        if (location) {
            fetch(
                `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&current_weather=true`
            )
                .then((res) => res.json())
                .then((data) => {
                    setWeather(data.current_weather);
                })
                .catch((err) => setError("Failed to fetch weather."));
        }
    }, [location]);

    if (error) return <div className="text-red-300 text-sm">{error}</div>;

    if (!weather) return (
        <div className="flex items-center gap-4 animate-pulse">
            <div className="h-12 w-12 bg-white/20 rounded-full"></div>
            <div className="space-y-2">
                <div className="h-4 w-20 bg-white/20 rounded"></div>
                <div className="h-3 w-16 bg-white/20 rounded"></div>
            </div>
        </div>
    );

    // Weather codes mapping (simplified)
    const getWeatherDescription = (code) => {
        if (code === 0) return "Clear sky";
        if (code <= 3) return "Partly cloudy";
        if (code <= 48) return "Foggy";
        if (code <= 67) return "Rainy";
        if (code <= 77) return "Snowy";
        return "Weather";
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="flex flex-col">
                    <span className="text-5xl font-bold tracking-tighter">{Math.round(weather.temperature)}°</span>
                    <span className="text-white/60 text-sm">Temperature</span>
                </div>
                <div className="h-12 w-px bg-white/10 mx-2"></div>
                <div className="flex flex-col">
                    <span className="text-white/90 font-medium">{getWeatherDescription(weather.weathercode)}</span>
                    <span className="text-white/60 text-sm">Wind: {weather.windspeed} km/h</span>
                </div>
            </div>
        </div>
    );
}
