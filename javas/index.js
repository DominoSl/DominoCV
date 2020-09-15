let ks = "https://cors-anywhere.herokuapp.com";
let rs='https://www.metaweather.com/api/location/924938';


// $('#intob').click(()=>{
//     let rs='https://www.metaweather.com/api/location/search/?query=' + $('#city').val();
//     fetch(`${ks}/${rs}`)
//     .then(response => response.json())
//     .then(json => {
//          $('#into').html(json.woeid);
//          rs='https://www.metaweather.com/api/location/search/?query=' + $('#city').val();
//              })
//     .catch(err => console.error(err));
//   })

$('#out').click( ()=> {
    fetch(`${ks}/${rs}`)
    .then(response => response.json())
    .then(json => {
    $('#first').html(Math.round(json.consolidated_weather[0].the_temp) + ' C');
    $('#second').html(Math.round(json.consolidated_weather[1].the_temp) + ' C');
    $('#third').html(Math.round(json.consolidated_weather[2].the_temp) + ' C');
    $('#fourth').html(Math.round(json.consolidated_weather[3].the_temp) + ' C');
    $('#fifth').html(Math.round(json.consolidated_weather[4].the_temp) + ' C');
    })
    .catch(err => console.error(err));
  })
