// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4] //invalid
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9] //valid
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3] //invalid
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3] //invalid
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3] //valid

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

/**
 * Determines if credit card number is valid
 * @param cardNumbers 
 * @returns true if valid card number else false
 */
const validateCred = cardNumbers => {
    let sum = 0;
    for (let i = cardNumbers.length - 1; i >= 0; i--) {
        let val = cardNumbers[i];
        if ((cardNumbers.length - 1 - i) % 2 === 1) {
            val *= 2;
            if (val > 9) {
                val -= 9;
            }
        }
        sum += val;
    }
    return sum % 10 === 0;
};

// Test validateCred
console.log(validateCred(valid1)); //true
console.log(validateCred(invalid1)); //false
console.log(validateCred(mystery1)); //false
console.log(validateCred(mystery2)); //true
console.log(validateCred(mystery3)); //false
console.log(validateCred(mystery4)); //false
console.log(validateCred(mystery5)); //true

/**
 * Gets list of invalid cards from a batch of cards
 * @param cards list of card numbers
 * @returns list of invalid credit card numbers
 */
const findInvalidCards = cards => {
    let valid = false;
    let invalidCards = []
    for (let i = 0; i < cards.length; i++) {
        valid = validateCred(cards[i])
        if (!valid) {
            invalidCards[i] = cards[i]
        }
    }
    return invalidCards;
};

// Test findInvalidCards
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
console.log(findInvalidCards(batch)); // Should print invalid1, 2, 3, 4, 5 and mystery1, 3, 4

/**
 * Gets list of companies with invalid credit cards
 * @param invalidCards list of invalid card numbers
 * @returns list of companies with invalid credit cards
 */
const idInvalidCardCompanies = invalidCards => {
    let invalidCompanies = [];
    for (let i = 0; i < invalidCards.length; i++) {
        if (invalidCards[i][0] === 3 && invalidCompanies.indexOf("Amex") === -1) {
            invalidCompanies[i] = "Amex";
        }
        else if (invalidCards[i][0] === 4 && invalidCompanies.indexOf("Visa") === -1) {
            invalidCompanies[i] = "Visa";
        }
        else if (invalidCards[i][0] === 5 && invalidCompanies.indexOf("Mastercard") === -1) {
            invalidCompanies[i] = "Mastercard";
        }
        else if (invalidCards[i][0] === 6 && invalidCompanies.indexOf("Discover") === -1) {
            invalidCompanies[i] = "Discover";
        }
        else if (invalidCards[i][0] !== 3 && invalidCards[i][0] !== 4 && invalidCards[i][0] !== 5 && invalidCards[i][0] !== 6) {
            console.log("Company not found");
        }
    }
    return invalidCompanies;
};

//Test idInvalidCardCompanies
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Should print ['visa', 'mastercard', 'amex', 'discover']








