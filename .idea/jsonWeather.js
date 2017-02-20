/**
 * Created by cyresallen on 2/17/17.
 */

{
    "location" : {
    "city": "Orlando",
        "country": "United States",
        "region": "FL"
},

    "results" : {
    "distance": "mi",
        "pressure": "ins",
        "speed": "mph",
        "temperature": "F"
},

    "wind" : {
    "chill": 76,
        "direction": 360,
        "speed": 5
},

    "atmosphere" : {
    "humidity": 48,
        "pressure": 29.65,
        "rising": 0,
        "visibility": 10
},

    "astronomy" : {
    "sunrise": "7:26 am",
        "sunset": "6:51 pm"
},

    "condition" : {
    "code": 33,
        "date": "Fri, 17 Oct 2014 5:53am EST",
        "temp": "Fair"
},

    "forcast": [{
    "code": 30,
    "date": " 17 Oct 2014 ",
    "day": "Fri",
    "high": 80,
    "low": 62,
    "text": "Sunny"
}, {
    "code": 30,
    "date": " 18 Oct 2014 ",
    "day": "Sat",
    "high": 82,
    "low": 63,
    "text": "Partly Cloudy"
}, {
    "code": 30,
    "date": " 9 Oct 2014 ",
    "day": "Sun",
    "high": 85,
    "low": 65,
    "text": "Partly Cloudy"
}]}

//x = weather.name;

//JSON Text
var text = '{ "employees" : [' +
    '{ "firstName":"John" , "lastName":"Doe" },' +
    '{ "firstName":"Anna" , "lastName":"Smith" },' +
    '{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//JSON Object

var myJSON = {"people":[
    {"name":"John", "job":"Construction"},
    {"name":"Anna", "job":"Teacher"},
    {"name":"Peter", "job":"Astronaut"}
]}