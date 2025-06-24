// Code your solution in this file!

// 1. Return the first two drivers from the array
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers from the array
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the above two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns a fare multiplier function
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Doubles fares
const fareDoubler = createFareMultiplier(2);

// 6. Triples fares
const fareTripler = createFareMultiplier(3);

// 7. Selects different drivers using a function
function selectDifferentDrivers(drivers, fn) {
  return fn(drivers);
}
