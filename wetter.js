// wetter.js 

function kelvinToCelsius(t) {
    'use strict';
    return (t - 273.15).toFixed(1);
}

function displayWerte(myJsonW) {
    'use strict';

    //console.log(myJsonW);

    var ortAusgabe = myJsonW.name;
    var aktWetter = myJsonW.weather[0].description;
    var temp = kelvinToCelsius(myJsonW.main.temp);
    var druck = myJsonW.main.pressure;
    var luftfeuchte = myJsonW.main.humidity;

    //console.log('temp:', temp);
    document.getElementById("ortAusgabe").innerHTML = ortAusgabe;
    document.getElementById("aktWetter").innerHTML = aktWetter;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("druck").innerHTML = druck;
    document.getElementById("luftfeuchte").innerHTML = luftfeuchte;
}

function ladeWetter(myort) {
    'use strict';
    var apikey = "9655971934d81e31516b18b35f7e8e91";
    var ort = document.getElementById(myort).value;
    // console.log(ort);
    var urlW = "https://api.openweathermap.org/data/2.5/weather?q=" + ort + "&lang=de" + "&appid=ab8b8258961c0910cf51728072575460";

    // alert(urlW);
    var httpW = new XMLHttpRequest();

    httpW.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            var textW = this.responseText;
            console.log(textW);
            var jsonW = JSON.parse(textW);
            //console.log(jsonW);
            displayWerte(jsonW);
        }
    }

    httpW.open("GET", urlW, true);
    httpW.send();
}
