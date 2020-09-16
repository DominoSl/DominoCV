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
      $("#iconfirst").attr('src', `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[0].weather_state_abbr}.png`);  
      $("#iconsecond").attr('src', `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[1].weather_state_abbr}.png`);  
      $("#iconthird").attr('src', `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[2].weather_state_abbr}.png`);  
      $("#iconfourth").attr('src', `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[3].weather_state_abbr}.png`);  
      $("#iconfifth").attr('src', `https://www.metaweather.com/static/img/weather/png/64/${json.consolidated_weather[4].weather_state_abbr}.png`);  
      $("#first").html(Math.round(json.consolidated_weather[0].the_temp) + " C");
      $("#second").html(Math.round(json.consolidated_weather[1].the_temp) + " C");
      $("#third").html(Math.round(json.consolidated_weather[2].the_temp) + " C");
      $("#fourth").html(Math.round(json.consolidated_weather[3].the_temp) + " C");
      $("#fifth").html(Math.round(json.consolidated_weather[4].the_temp) + " C");
    })
    .catch((err) => console.error(err));
});
