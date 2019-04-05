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


  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
  };
})
