debugger

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.psModeState = true;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.psModeState === false && this.temperature >= 32) {
    this.temperature = 32;
  } else if (this.psModeState === true && this.temperature >= 25) {
    this.temperature = 25;
  } else {
    this.temperature += 1
  }
};

Thermostat.prototype.down = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1
};

Thermostat.prototype.psMode = function() {
  return this.psModeState;
};

Thermostat.prototype.switch = function() {
  if (this.psModeState === true) {
    this.psModeState = false;
  } else {
    this.psModeState = true;
  }
};

Thermostat.prototype.reset = function() {
  this.temperature = 20;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature <= 18) {
    return "Low Usage";
  } else if (this.temperature >= 25) {
    return "High Usage";
  } else {
    return "Medium Usage";
  }
};
