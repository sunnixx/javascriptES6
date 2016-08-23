var $ = require('jquery');
var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Angela",
  "last_name": "Kelley",
  "email": "akelley0@answers.com",
  "gender": "Female",
  "ip_address": "181.193.42.191"
}, {
  "id": 2,
  "first_name": "Nancy",
  "last_name": "Perez",
  "email": "nperez1@csmonitor.com",
  "gender": "Female",
  "ip_address": "6.66.109.72"
}, {
  "id": 3,
  "first_name": "Diana",
  "last_name": "Green",
  "email": "dgreen2@eventbrite.com",
  "gender": "Female",
  "ip_address": "136.124.211.60"
}, {
  "id": 4,
  "first_name": "Nancy",
  "last_name": "Rivera",
  "email": "nrivera3@zimbio.com",
  "gender": "Female",
  "ip_address": "141.143.3.168"
}, {
  "id": 5,
  "first_name": "Randy",
  "last_name": "Chavez",
  "email": "rchavez4@barnesandnoble.com",
  "gender": "Male",
  "ip_address": "171.117.205.228"
}, {
  "id": 6,
  "first_name": "Jacqueline",
  "last_name": "Holmes",
  "email": "jholmes5@msn.com",
  "gender": "Female",
  "ip_address": "29.164.232.207"
}, {
  "id": 7,
  "first_name": "Patrick",
  "last_name": "Howard",
  "email": "phoward6@ed.gov",
  "gender": "Male",
  "ip_address": "193.218.117.48"
}, {
  "id": 8,
  "first_name": "James",
  "last_name": "Murphy",
  "email": "jmurphy7@livejournal.com",
  "gender": "Male",
  "ip_address": "129.123.188.28"
}, {
  "id": 9,
  "first_name": "Bruce",
  "last_name": "Hill",
  "email": "bhill8@nps.gov",
  "gender": "Male",
  "ip_address": "62.216.203.212"
}, {
  "id": 10,
  "first_name": "Rose",
  "last_name": "Marshall",
  "email": "rmarshall9@harvard.edu",
  "gender": "Female",
  "ip_address": "238.237.225.244"
}];

var femaleCount = _.filter(people,{gender: "Female"}).length;

$('h1').html('<p>Female Count ' + femaleCount + '</p>');