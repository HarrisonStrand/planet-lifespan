import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { Age } from './js/ageConversions.js';

$(document).ready(function() {
  let mercAge = (age.mercuryConv());
  let strLit = 'Your age on Mercury is ${ mercAge }!!!'
  $("button#calculate").click(function(event) {
    $("#results").text(strLit);
    event.preventDefault();
  });
  
});