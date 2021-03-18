import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoLand from "./js/service.js";

$(document).ready(function() {
  $("#dino-paragraphs").click(function(event) {
    event.preventDefault();

    let paragraph = $("input#para-number").val();
    console.log(paragraph);
    let words = $("input#word-number").val();
    console.log(words);

    let promise = DinoLand.dinoParagraphs(paragraph, words);
    promise.then(function(response) {
      console.log(response);
      // const body = JSON.parse(response);
      // console.log(body);
      $('.showDino').text(`${response}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
// $('#weatherLocation').click(function() {
//   let city = $('#location').val();
//   clearFields();
//   let promise = WeatherService.getWeather(city);
//   promise.then(function(response) {
//     const body = JSON.parse(response);
//     $('.showHumidity').text(`The humidity in ${city} is ${body.main.humidity}%`);
//     $('.showTemp').text(`The temperature in Kelvins is ${body.main.temp} degrees.`);
//   }, function(error) {
//     $('.showErrors').text(`There was an error processing your request: ${error}`);
//   });
// });




// function clearFields() {
//   $('#location').val("");
//   $('.showErrors').text("");
//   $('.showHumidity').text("");
//   $('.showTemp').text("");
// }