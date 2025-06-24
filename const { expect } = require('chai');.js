const { expect } = require('chai');

// JavaScript

// Import functions from index.js
const {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
} = require('./index.js');

describe('index.js', function() {
    const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

    describe('returnFirstTwoDrivers()', function() {
        it('should return a new array containing the first two drivers from the passed-in array', function() {
            expect(returnFirstTwoDrivers(drivers)).to.eql(['Antonia', 'Nuru']);
        });
    });

    describe('returnLastTwoDrivers()', function() {
        it('should return an array of the last two drivers', function() {
            expect(returnLastTwoDrivers(drivers)).to.eql(['Amari', 'Mo']);
        });
    });

    describe('selectingDrivers', function() {
        it('has the `returnFirstTwoDrivers` function to as its first element', function() {
            expect(selectingDrivers[0]).to.equal(returnFirstTwoDrivers);
        });

        it('has the `returnLastTwoDrivers` function to as its last element', function() {
            expect(selectingDrivers[1]).to.equal(returnLastTwoDrivers);
        });

        it('allows us to invoke either function from the array', function() {
            expect(selectingDrivers[0](drivers)).to.eql(['Antonia', 'Nuru']);
            expect(selectingDrivers[1](drivers)).to.eql(['Amari', 'Mo']);
        });
    });

    describe('createFareMultiplier()', function() {
        it('returns a function', function() {
            const fareMultiplier = createFareMultiplier(4);
            expect(fareMultiplier).to.be.a('function');
        });

        it('should multiply a given value using the created multiplier', function() {
            const fareMultiplier = createFareMultiplier(3);
            expect(fareMultiplier(5)).to.equal(15);
            expect(fareMultiplier(10)).to.equal(30);
        });
    });

    describe('fareDoubler()', function() {
        it('is a function', function() {
            expect(fareDoubler).to.be.a('function');
        });

        it('doubles fares', function() {
            expect(fareDoubler(10)).to.equal(20);
            expect(fareDoubler(25)).to.equal(50);
        });
    });

    describe('fareTripler()', function() {
        it('is a function', function() {
            expect(fareTripler).to.be.a('function');
        });

        it('triples fares', function() {
            expect(fareTripler(12)).to.equal(36);
            expect(fareTripler(33)).to.equal(99);
        });
    });

    describe('selectDifferentDrivers(arrayOfDrivers, function)', function() {
        it('returns the first two drivers when passed returnFirstTwoDrivers() as the second argument', function() {
            expect(selectDifferentDrivers(drivers, returnFirstTwoDrivers)).to.eql(['Antonia', 'Nuru']);
        });

        it('returns the last two drivers when passed returnLastTwoDrivers() as the second argument', function() {
            expect(selectDifferentDrivers(drivers, returnLastTwoDrivers)).to.eql(['Amari', 'Mo']);
        });
    });
});