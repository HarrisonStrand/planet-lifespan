import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './js/ageConversions.js';

$(document).ready(function() {
  let planet1 = "Mercury";
  let litAge = (age.mercuryConv());
  let litStr = 'Your age in ${planet1} is ${litStr}!!';
  $("button#calculate").click(function(event) {
    $("#results").text(strLit);
    event.preventDefault();
  });
});