// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { isCorrect } from '../functions.js';

const test = QUnit.test;

test('isCorrect should return true if the user inputs yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'yes';
    //Act 
    // Call the function you're testing and set the result to a const
    const userInputIsCorrect = isCorrect(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userInputIsCorrect, true);
});
test('isCorrect should return false if the user inputs false', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const userInput = 'false';
    //Act 
    // Call the function you're testing and set the result to a const
    const userInputIsCorrect = isCorrect(userInput);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(userInputIsCorrect, false);
});