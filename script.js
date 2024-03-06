function getWeather(city) 
     {
            const api_Key = "4cd0eee81294c867b4bc4cfc64e9998c5";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const temperature = data.main.temp;
                    const description = data.weather[0].description;
                    const humidity = data.main.humidity;
                    const windSpeed = data.wind.speed;
                    const weatherIconUrl = 'http://openweathermap.org/img/w/${data.weather[0].icon}.png';
                    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
        
                    const weatherElement = document.getElementById("weather");
                    weatherElement.innerHTML = `
                        <h2>Weather in ${city}</h2>
                        <div><strong>Temperature:</strong> ${temperature}°C</div>
                        <div><strong>Description:</strong> ${description}</div>
                        <div><strong>Humidity:</strong> ${humidity}%</div>
                        <div><strong>Wind Speed:</strong> ${windSpeed} m/s</div>
                        <div><strong>Sunrise:</strong> ${sunriseTime}</div>
                        <div><strong>Sunset:</strong> ${sunsetTime}</div>
                        <img src="${weatherIconUrl}" alt="Weather Icon" style="width: 100px; height: 100px;">
                    `;
                })
                .catch(error => {
                    console.error("Error fetching weather data:", error);
                });
        }