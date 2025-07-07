const apiKey = "61c7f3ffd673410b9eb120926250707";
const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  const city = input.value.trim();
  if (!city){
      document.getElementById("h1tag").innerText=("Please enter a city name");  
    }
    else{
         document.getElementById("h1tag").innerHTML="";
    }

  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const tempC = data.current.temp_c;
      const humidity = data.current.humidity;
      const wind = data.current.wind_kph;
      const cityName = data.location.name;
      document.querySelector(".tag h1").innerText = `${tempC} °C`;
      document.querySelector(".citytag h1").innerText = cityName;
      document.querySelector(".humidity h1").innerText = `Humidity: ${humidity}%`;
      document.querySelector(".wind h1").innerText = `Wind: ${wind} km/hr`;
      const condition = data.current.condition.text.toLowerCase();
      const weatherImg = document.querySelector(".img img");

      if (condition.includes("rain")) {
        weatherImg.src = "rain.png";
      } else if (condition.includes("cloud")) {
        weatherImg.src = "clouds.png";
      } else if (condition.includes("clear") || condition.includes("sun")) {
        weatherImg.src = "clear.png";
      } else {
        weatherImg.src = "drizzle.png";
      }
    })
    .catch(error => {
      document.getElementById("h1tag").innerText=("City not found or error fetching data.");
    });
});
