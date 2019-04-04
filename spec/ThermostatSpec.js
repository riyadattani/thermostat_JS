describe("Thermostat", function() {

  var thermostat;

  beforeEach(function () {
    thermostat = new Thermostat()
  });

  it("starts with 20 degrees", function() {
    expect(thermostat.currentTemperature()).toEqual(20);
  });

  it("should increase the temperature using up", function() {
    thermostat.up()
    expect(thermostat.currentTemperature()).toEqual(21);
  });

  it("should increase the temperature using down", function() {
    thermostat.down()
    expect(thermostat.currentTemperature()).toEqual(19);
  });

  it("should have a minmum of 10 degrees", function() {
    for (i = 1; i < 11; i++) {
      thermostat.down()
    }
    expect(thermostat.currentTemperature()).toEqual(10);
    thermostat.down()
    expect(thermostat.currentTemperature()).toEqual(10);
  });

  describe("psMode", function() {
    it("psMode is true by default", function() {
      expect(thermostat.isPsModeOn()).toBe(true)
    });

    it("thermostat can be turned off", function() {
      thermostat.switch();
      expect(thermostat.isPsModeOn()).toBe(false)
    });

    it("there is a maximum temp of 25 when psMode is true", function() {
      for (i = 1; i < 10; i++) {
        thermostat.up()
      }
      expect(thermostat.currentTemperature()).toEqual(25)
    });

    it("there is a maximum temp of 32", function() {
      thermostat.switch()
      for (i = 1; i < 15; i++) {
        thermostat.up()
      }
      expect(thermostat.currentTemperature()).toEqual(32)
    });
  });

  describe("#reset", function() {
    it("should reset the temp to 25", function() {
      thermostat.reset()
      expect(thermostat.currentTemperature()).toEqual(20)
    });
  });

  describe("#energyUsage", function() {
    it("should show medium usage as default i.e. 20", function() {
      expect(thermostat.energyUsage()).toEqual("Medium Usage")
    });

    it("should show low usage for a temp =< 17", function () {
      for (i = 1; i < 5; i++) {
        thermostat.down()
      }
      expect(thermostat.energyUsage()).toEqual("Low Usage")
    });

    it("should show high usage for a temp > 25", function () {
      for (i = 1; i < 8; i++) {
        thermostat.up()
      }
      expect(thermostat.energyUsage()).toEqual("High Usage")
    });
  });
});
