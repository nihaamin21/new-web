function initialized(){
  $(".form-control").keyup(function (event){
    if (event.keyCode === 13) {
      $(".btn").click();
    }
});
  searchCity();
}
function searchCity(){
    let city=document.querySelector(".form-control").value;
    $.ajax({
  
      url :`https://api.openweathermap.org/data/2.5/weather?q=${city ? city :"Karachi"}&appid=c63b5fe74e0b24e582cb2cb100efd74d&units=metric`,
      success: function(data){
      
  
        let cityName = document.querySelector(".city");
        cityName.innerHTML=data.name
         let date = new Date();
         let months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
         document.querySelector(".current-month").innerHTML=months[date.getMonth()];
         document.querySelector(".current-date").innerHTML=date.getDate();
  
         let currentTemp =document.querySelector(".temp");
         currentTemp.innerHTML=parseInt(data.main.temp) + " C°";
  
         let weathercondition =document.querySelector(".weather");
         weathercondition.innerHTML=data.weather[0].main;

         let currentTime = new Date();
         let sunrise = new Date(data.sys.sunrise * 1000);
         let sunset = new Date(data.sys.sunset * 1000);
   
         if (currentTime > sunrise && currentTime < sunset) {
           document.querySelector('body').style["background"] = `linear-gradient(to right, #EDDE5D, #F09819)`;
         }
         else {
           document.querySelector('body').style["background"] = `linear-gradient(to right, #414491, #cc2b5e)`;
         }
      },
      
      error: function(error){
        alert(error);
      }
    });
     $.ajax({
      url:`https://api.openweathermap.org/data/2.5/forecast?q=${city ? city : "karachi"}&appid=c63b5fe74e0b24e582cb2cb100efd74d&units=metric`,
      success:function(data){
        let forcast1 = new Date(data.list[0].dt * 1000);
        let forcast2 = new Date(data.list[8].dt * 1000);
        let forcast3 = new Date(data.list[16].dt * 1000);
        let forcast4 = new Date(data.list[24].dt * 1000);
        let forcast5 = new Date(data.list[32].dt * 1000);
        // let forcast6 = new Date(data.list[0].dt * 1000);
        // let forcast7 = new Date(data.list[0].dt * 1000);
  
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
        document.querySelector(".card-day-1").innerHTML = days[forcast1.getDay()];
        document.querySelector(".card-day-2").innerHTML = days[forcast2.getDay()];
        document.querySelector(".card-day-3").innerHTML = days[forcast3.getDay()];
        document.querySelector(".card-day-4").innerHTML = days[forcast4.getDay()];
        document.querySelector(".card-day-5").innerHTML = days[forcast5.getDay()];
        // document.querySelector(".card-day6").innerHTML = days[forcast6.getDay()];
        // document.querySelector(".card-day7").innerHTML = days[forcast7.getDay()];
  
        document.querySelector(".card-temp-1").innerHTML = parseInt(data.list[0].main.temp) + " C°";
        document.querySelector(".card-temp-2").innerHTML = parseInt(data.list[8].main.temp) + " C°";
        document.querySelector(".card-temp-3").innerHTML = parseInt(data.list[16].main.temp) + " C°";
        document.querySelector(".card-temp-4").innerHTML = parseInt(data.list[24].main.temp) + " C°";
        document.querySelector(".card-temp-5").innerHTML = parseInt(data.list[32].main.temp) + " C°";
  
        // day1
  
        let forecasteIconD1 = data.list[0].weather[0].main;

      if (forecasteIconD1 == "Clear") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-day-sunny"></i>`
      }

      else if (forecasteIconD1 == "Partly Cloudy") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-day-cloudy"></i>`
      }
      else if (forecasteIconD1 == "Partly Cloudy") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
      }
      else if (forecasteIconD1 == "Clouds") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-cloud"></i>`
      }
      else if (forecasteIconD1 == "Mostly Cloudy") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-cloudy"></i>`
      }
      else if (forecasteIconD1 == "Scattered Showers") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-showers"></i>`
      }
      else if (forecasteIconD1 == "Rain") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-rain"></i>`
      }
      else if (forecasteIconD1 == "Thunderstorm") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-thunderstorm"></i>`
      }
      else if (forecasteIconD1 == "Snow") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-snow"></i>`
      }
      else if (forecasteIconD1 == "Mist" || forecasteIconD1 == "Smoke") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-windy"></i>`
      }
      else if (forecasteIconD1 == "Haze") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-dust"></i>`
      }
      else if (forecasteIconD1 == "Storm") {
        document.querySelector(".card-icon-1").innerHTML = `<i class="wi wi-sandstorm"></i>`
      }
  
        // day2 
  
        let forecasteIconD2 = data.list[8].weather[0].main;
  
        if (forecasteIconD2 == "Clear") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
  
        else if (forecasteIconD2 == "Partly Cloudy") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if (forecasteIconD2 == "Partly Cloudy") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
        }
        else if (forecasteIconD2 == "Clouds") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-cloud"></i>`
        }
        else if (forecasteIconD2 == "Mostly Cloudy") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-cloudy"></i>`
        }
        else if (forecasteIconD2 == "Scattered Showers") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-showers"></i>`
        }
        else if (forecasteIconD2 == "Rain") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-rain"></i>`
        }
        else if (forecasteIconD2 == "Thunderstorm") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-thunderstorm"></i>`
        }
        else if (forecasteIconD2 == "Snow") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-snow"></i>`
        }
        else if (forecasteIconD2 == "Mist" || forecasteIconD2 == "Smoke") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-windy"></i>`
        }
        else if (forecasteIconD2 == "Haze") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-dust"></i>`
        }
        else if (forecasteIconD2 == "Storm") {
          document.querySelector(".card-icon-2").innerHTML = `<i class="wi wi-sandstorm"></i>`
        }
  
        // day3
  
        let forecasteIconD3 = data.list[16].weather[0].main;
  
        if (forecasteIconD3 == "Clear") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
        else if (forecasteIconD3 == "Partly Cloudy") {
          document.querySelector(".fcard-icon-3").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if (forecasteIconD3 == "Partly Cloudy") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
        }
        else if (forecasteIconD3 == "Clouds") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-cloud"></i>`
        }
        else if (forecasteIconD3 == "Mostly Cloudy") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-cloudy"></i>`
        }
        else if (forecasteIconD3 == "Scattered Showers") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-showers"></i>`
        }
        else if (forecasteIconD3 == "Rain") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-rain"></i>`
        }
        else if (forecasteIconD3 == "Thunderstorm") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-thunderstorm"></i>`
        }
        else if (forecasteIconD3 == "Snow") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-snow"></i>`
        }
        else if (forecasteIconD3 == "Mist" || forecasteIconD3 == "Smoke") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-windy"></i>`
        }
        else if (forecasteIconD3 == "Haze") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-dust"></i>`
        }
        else if (forecasteIconD3 == "Storm") {
          document.querySelector(".card-icon-3").innerHTML = `<i class="wi wi-sandstorm"></i>`
        }
  
        // day4
  
        let forecasteIconD4 = data.list[24].weather[0].main;
  
        if (forecasteIconD4 == "Clear") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
  
        else if (forecasteIconD4 == "Partly Cloudy") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if (forecasteIconD4 == "Partly Cloudy") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
        }
        if (forecasteIconD4 == "Clouds") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-cloud"></i>`
        }
        else if (forecasteIconD4 == "Mostly Cloudy") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-cloudy"></i>`
        }
        else if (forecasteIconD4 == "Scattered Showers") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-showers"></i>`
        }
        else if (forecasteIconD4 == "Rain") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-rain"></i>`
        }
        else if (forecasteIconD4 == "Thunderstorm") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-thunderstorm"></i>`
        }
        else if (forecasteIconD4 == "Snow") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-snow"></i>`
        }
        else if (forecasteIconD4 == "Mist" || forecasteIconD4 == "Smoke") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-windy"></i>`
        }
        else if (forecasteIconD4 == "Haze") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-dust"></i>`
        }
        else if (forecasteIconD4 == "Storm") {
          document.querySelector(".card-icon-4").innerHTML = `<i class="wi wi-sandstorm"></i>`
        }
  
        // day5
  
        let forecasteIconD5 = data.list[24].weather[0].main;
  
        if (forecasteIconD5 == "Clear") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-day-sunny"></i>`
        }
  
        else if (forecasteIconD5 == "Partly Cloudy") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-day-cloudy"></i>`
        }
        else if (forecasteIconD5 == "Partly Cloudy") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-night-alt-cloudy"></i>`
        }
        if (forecasteIconD5 == "Clouds") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-cloud"></i>`
        }
        else if (forecasteIconD5 == "Mostly Cloudy") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-cloudy"></i>`
        }
        else if (forecasteIconD5 == "Scattered Showers") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-showers"></i>`
        }
        else if (forecasteIconD5 == "Rain") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-rain"></i>`
        }
        else if (forecasteIconD5 == "Thunderstorm") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-thunderstorm"></i>`
        }
        else if (forecasteIconD5 == "Snow" || forecasteIconD5 == "Smoke") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-snow"></i>`
        }
        else if (forecasteIconD5 == "Mist") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-windy"></i>`
        }
        else if (forecasteIconD5 == "Haze") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-dust"></i>`
        }
        else if (forecasteIconD5 == "Storm") {
          document.querySelector(".card-icon-5").innerHTML = `<i class="wi wi-sandstorm"></i>`
        }
  
      },
      error: function (error) {
        alert(error);
      }
     })
  };











  