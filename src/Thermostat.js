// debugger

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.psModeState = true;
  this.MAXIMUM_TEMPERATURE = 32;
  this.PSM_MAX_TEMPERATURE = 25;
  this.PSM_MIN_TEMPERATURE = 18;
  this.DEFUALT_TEMPERATURE = 20;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (this.psModeState === false && this.temperature >= this.MAXIMUM_TEMPERATURE) {
    this.temperature = this.MAXIMUM_TEMPERATURE;
  } else if (this.psModeState === true && this.temperature >= this.PSM_MAX_TEMPERATURE) {
    this.temperature = this.PSM_MAX_TEMPERATURE;
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

Thermostat.prototype.isPsModeOn = function() {
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
  this.temperature = this.DEFUALT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature <= this.PSM_MIN_TEMPERATURE) {
    return "Low Usage";
  } else if (this.temperature >= this.PSM_MAX_TEMPERATURE) {
    return "High Usage";
  } else {
    return "Medium Usage";
  }
};
