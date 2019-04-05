$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').on('click', function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  })

  $('#temperature-down').on('click', function() {
    thermostat.down();
    updateTemperature();
  })

  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })

  $('#psm-switch').on('click', function() {
    thermostat.switch();
    updatePSM();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.currentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function updatePSM() {
    if(thermostat.isPsModeOn() === true) {
      $("#power-saving-status").text("on")
      $("#power-saving-button").text("off")
    } else {
      $("#power-saving-status").text("off")
      $("#power-saving-button").text("on")
    }
  };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
  })

  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
      $('#city').text(data.name);
    })
  }
})
