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
})
