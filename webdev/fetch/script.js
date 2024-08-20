const URL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Dar%20es%20Salaam?unitGroup=metric&elements=datetime%2Cname%2Clatitude%2Clongitude%2Ctemp%2Cprecipprob%2Cwindspeed%2Cuvindex%2Csunrise%2Csunset%2Cicon&key=DRV9JB4KZUH55EDM462M3HS4D&contentType=json";

fetch(URL).then(function(response) {
    return response.json();
}).then(function(data) {
    console.log(data)
}).catch(function(error) {
    console.log(error);
});
