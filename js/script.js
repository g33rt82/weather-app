(() => {

    document.getElementById("run").addEventListener("click", function (event) {
        event.preventDefault();
        const cityName = document.getElementById("input");
        console.log(cityName.value);

        // const ow_user = "geertuyttendaele";
        const ow_secret_default = "aa5dac93d23ae8d8915c8d977c0631f6";
        const api_path = "http://api.openweathermap.org/data/2.5/forecast?";
        const requestedCity = `q=${cityName.value}`;
        const units = `&units=metric`;

        const url = `${api_path}${requestedCity}${units}&appid=${ow_secret_default}`;
        const getWeather = async () => {
            try {
                const response = await fetch(url);
                if (response.ok) {
                    const jsonResponse = await response.json();

                    console.log(jsonResponse);

                    const day_1 = (jsonResponse.list.slice(0, 8));
                    //    console.log(day_1);
                    const day_2 = (jsonResponse.list.slice(8, 16));
                    //  console.log(day_2);
                    const day_3 = (jsonResponse.list.slice(16, 24));
                    //  console.log(day_3);
                    const day_4 = (jsonResponse.list.slice(24, 32));
                    //console.log(day_4);
                    const day_5 = (jsonResponse.list.slice(32, 40));


                    let cardTitle = document.getElementsByClassName("card-title");
                //    let cardSubTitle = document.getElementsByClassName("card-subtitle");
                    const cardDeck = document.getElementById("card-deck");
                    console.log(jsonResponse.list[0].main.temp_min);
                    console.log(jsonResponse.list[0].main.temp_max);
                    console.log(jsonResponse.list[0].main.temp);

                    const template = document.getElementById("card-template");

                    //     console.log(newCard);

                    const createNewCard = (i) => {

                        const newCard = template.content.cloneNode(true);
                        const minTemp = newCard.querySelector(".min-temp");
                        const maxTemp = newCard.querySelector(".max-temp");
                        const avgTemp = newCard.querySelector(".temp");
                        const weatherIcon = newCard.querySelector("i");
                        let owmIconId= jsonResponse.list[i*8].weather[0].id;

                        weatherIcon.classList.add(`wi-owm-day-${owmIconId}`);


                        const unix_timestamp = jsonResponse.list[i * 8].dt;
                        const date_day = new Date(unix_timestamp * 1000);
                        const weekDay = date_day.getDay();

                        switch (weekDay) {
                            case 0 :
                                newCard.querySelector(".card-title").innerText = "Sunday";
                                break;
                            case 1 :
                                newCard.querySelector(".card-title").innerText = "Monday";
                                break;
                            case 2 :
                                newCard.querySelector(".card-title").innerText = "Tuesday";
                                break;
                            case 3 :
                                newCard.querySelector(".card-title").innerText = "Wednesday";
                                break;
                            case 4 :
                                newCard.querySelector(".card-title").innerText = "Thursday";
                                break;
                            case 5 :
                                newCard.querySelector(".card-title").innerText = "Friday";
                                break;
                            case 6 :
                                newCard.querySelector(".card-title").innerText = "Saturday";
                                break;
                        }

                        minTemp.innerText = `${jsonResponse.list[i * 8].main.temp_min}°C`;
                        maxTemp.innerText = `${jsonResponse.list[i * 8].main.temp_max}°C`;
                        avgTemp.innerText = `${jsonResponse.list[i * 8].main.temp}°C`;
                        console.log(newCard);
                        cardDeck.appendChild(newCard);
                    };

                    for (i = 0; i < 5; i++) {

                        createNewCard(i);
                    }



                }


              //  let minTemp = document.getElementsByClassName("min-temp");
              //  let maxTemp = document.getElementsByClassName("max-temp");
            }
            catch (error) {
                console.log(error);
            }


        }

        getWeather();

    });
})();
