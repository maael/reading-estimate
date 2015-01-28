/*
* Module Dependencies
*/
var readingEstimate = require('..'),
    chai = require('chai'),
    should = chai.should();

/* Test Variables */
var loremShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

describe('Reading Estimate', function() {
    describe('#estimate()', function() {
        it('should estimate time to read text', function() {
            (readingEstimate(loremShort).readingTime).should.eql({minutes: 0, seconds: 21});
        });
        it('should estimate time to read html', function() {

        });
        it('should return number of words in text', function() {
            (readingEstimate(loremShort).wordCount).should.equal(69);
        });
        it('should return number of readable words in html', function() {

        });
    });
});