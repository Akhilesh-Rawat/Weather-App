      
      const inputbox = document.querySelector(".input-box");
      const searchbtn = document.querySelector("#searchBtn");
      const weather_Image = document.querySelector(".weather-image");
      const tempreature = document.querySelector(".tempreature");
      const description = document.querySelector(".description");
      const humidity = document.querySelector("#humidity");
      const wind_speed = document.querySelector("#wind-speed");
      const location_not_found = document.querySelector(".location-not-found")
      const weather_body = document.querySelector(".weather-body");

      const checkWeather = async (city) =>{
        const api_key = "8ac8217580d20a4c345d1c1ce73e4ff4"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`

        const weather_data = await fetch(`${url}`).then(response =>
          response.json())
          if(weather_data.cod ==="404"){
            location_not_found.style.display="flex"
            weather_body.style.display ="none"
            console.log("error");
            return
          }
            location_not_found.style.display="none"
            weather_body.style.display ="flex"
          
          tempreature.innerText = `${Math.round(weather_data.main.temp - 273.15)} °C`;
          description.innerText = `${weather_data.weather[0].description}`;
          humidity.innerText = `${weather_data.main.humidity} %`
          wind_speed.innerText = `${weather_data.wind.speed} Km/h`;

          if(weather_data.weather[0].main == "Clouds"){
            weather_Image.src="./images/clouds.png"
          }
          else if(weather_data.weather[0].main == "Clear"){
            weather_Image.src="./images/clear.png"
          }
          else if(weather_data.weather[0].main == "Drizzle"){
            weather_Image.src="./images/drizzle.png"
          }
          else if(weather_data.weather[0].main == "Mist"){
            weather_Image.src="./images/mist.png"
          }
          else if(weather_data.weather[0].main == "Rain"){
            weather_Image.src="./images/rain.png"
          }
          else if(weather_data.weather[0].main == "snow"){
            weather_Image.src="./images/snow.png"
          }
          
          console.log(weather_data)
      }
      searchbtn.addEventListener("click" , () =>{
        checkWeather(inputbox.value)
      })
      