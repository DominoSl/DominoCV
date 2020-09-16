let kost = "https://cors-anywhere.herokuapp.com";

$("#intob").click(() => {
  let real = "https://www.metaweather.com/api/location/search/?query=" + $("#city").val();
  fetch(`${kost}/${real}`)
    .then((response) => response.json())
    .then((json) => {
      $("#into").html('The id is '+json[0].woeid);
      $("#ident").val(json[0].woeid);
    })
    .catch((err) => console.error(err));
});

$("#out").click(() => {
    let real = "https://www.metaweather.com/api/location/" + $('#ident').val();
  fetch(`${kost}/${real}`)
    .then((response) => response.json())
    .then((json) => {
      $("#iconfirst").src(`https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#first").html(Math.round(json.consolidated_weather[0].the_temp) + " C");
      $("#iconsecond").src(`https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#second").html(Math.round(json.consolidated_weather[1].the_temp) + " C");
      $("#iconthird").src(`https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#third").html(Math.round(json.consolidated_weather[2].the_temp) + " C");
      $("#iconfourth").src(`https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#fourth").html(Math.round(json.consolidated_weather[3].the_temp) + " C");
      $("#iconfifth").src(`https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#fifth").html(Math.round(json.consolidated_weather[4].the_temp) + " C");
    })
    .catch((err) => console.error(err));
});
