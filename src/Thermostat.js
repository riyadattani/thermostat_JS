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

// Thermostat.prototype.temperature = function() {
//   return 20;
// }

// function Player() {
// }
// Player.prototype.play = function(song) {
//   this.currentlyPlayingSong = song;
//   this.isPlaying = true;
// };
//
// Player.prototype.pause = function() {
//   this.isPlaying = false;
// };
//
// Player.prototype.resume = function() {
//   if (this.isPlaying) {
//     throw new Error("song is already playing");
//   }
//
//   this.isPlaying = true;
// };
//
// Player.prototype.makeFavorite = function() {
//   this.currentlyPlayingSong.persistFavoriteStatus(true);
// };
