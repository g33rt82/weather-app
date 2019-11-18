(() => {

  document.getElementById("run").addEventListener("click", function(event){
      event.preventDefault();
      const cityName = document.getElementById("input");
      console.log(cityName.value);

      const ow_user = "geertuyttendaele";
      const ow_secret_default = "aa5dac93d23ae8d8915c8d977c0631f6";
      const api_path = "http://api.openweathermap.org/data/2.5/weather?";
      const requestedCity = `q=${cityName.value}`;

      const url = `${api_path}${requestedCity}&appid=${ow_secret_default}`;
      const getWeather =  async() => {
        const response = await fetch(url);
        if (response.ok) {
          const jsonResponse =  await response.json();
          console.log(jsonResponse);
        }
      }
      getWeather();


  })


})();
