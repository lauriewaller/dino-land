import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoLand from "./js/service.js";

$(document).ready(function() {
  $("#dino-paragraphs").click(function(event) {
    event.preventDefault();

    let paragraph = $("input#para-number").val();
    let words = $("input#word-number").val();

    let promise = DinoLand.dinoParagraphs(paragraph, words);
    promise.then(function(response) {

      $('.showDino').text(`${response}`);

    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error}`);
    });
  });
});
