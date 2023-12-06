"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var lib_1 = require("./lib");
function wordle() {
    var randomWord = (0, lib_1.getRandomWord)();
    var regex = /[a-zA-Z]/g;
    var choosedWord = '';
    var wordArray = ['', '', '', '', ''];
    for (var r = 0; r < 6; r++) {
        wordArray = ['', '', '', '', ''];
        var choosedWord_1 = (0, lib_1.getInput)('\nType you word : \n').toUpperCase();
        var found = choosedWord_1.match(regex);
        if (choosedWord_1.length === 5 && found.length === choosedWord_1.length) {
            for (var i = 0; i < 5; i++) {
                if (choosedWord_1[i] === randomWord[i]) {
                    wordArray[i] = choosedWord_1[i];
                    console.log("The letter ".concat(wordArray[i], " is in the word and in the correct spot"));
                }
                else if (choosedWord_1[i] !== randomWord[i]) {
                    for (var j = 0; j < 5; j++) {
                        if (choosedWord_1[i] === randomWord[j] && choosedWord_1[i] !== randomWord[i]) {
                            wordArray[i] = choosedWord_1[i];
                            console.log("The letter ".concat(choosedWord_1[i], " is in the word but in the wrong spot"));
                        }
                    }
                }
                if (randomWord.includes(choosedWord_1[i]) === false) {
                    console.log("The letter ".concat(choosedWord_1[i], " is not in the word in any spot."));
                }
            }
        }
        else {
            console.log("The word must be five characters and contain only letters");
        }
        if (choosedWord_1 === randomWord && r < 6) {
            console.log(wordArray);
            console.log("\n\x1b[92mCONGRATULATIONS, YOU FOUND THE WORD !\n");
            break;
        }
        else if (choosedWord_1 !== randomWord && r === 5) {
            console.log('\n\x1b[91mTRY AGAIN.');
            console.log("The word was \u001B[92m".concat(randomWord, "\n"));
            break;
        }
        console.log(wordArray);
    }
}
wordle();
