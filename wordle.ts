import { getInput, getRandomWord } from "./lib";

function wordle()
{
    let randomWord = getRandomWord();
    const regex = /[a-zA-Z]/g;
    let choosedWord = '';
    let wordArray: string[] = ['','','','',''];
    
    for(let r: number = 0; r < 6; r++)
    {
        wordArray = ['','','','',''];

        let choosedWord = getInput('\nType you word : \n').toUpperCase(); 
        
        const found = choosedWord.match(regex);
        
        if(choosedWord.length === 5 && found.length === choosedWord.length)
        {

            for(let i:number = 0; i<5; i++)
            {
                if(choosedWord[i] === randomWord[i])
                {
                    wordArray[i] = choosedWord[i];
                    console.log(`The letter ${wordArray[i]} is in the word and in the correct spot`)
                }
                else if (choosedWord[i] !== randomWord[i])
                {
                    for(let j:number = 0; j<5; j++)
                    {  
                        if(choosedWord[i] === randomWord[j] && choosedWord[i] !== randomWord[i])
                        {
                            wordArray[i] = choosedWord[i];
                            console.log(`The letter ${choosedWord[i]} is in the word but in the wrong spot`); 
                        }
                    }
                }

                if(randomWord.includes(choosedWord[i]) === false)
                {
                    console.log(`The letter ${choosedWord[i]} is not in the word in any spot.`);
                }
            }
        }
        else
        {
            console.log("The word must be five characters and contain only letters");
        }

        if(choosedWord === randomWord && r < 6)
        {
            console.log(wordArray);
            console.log("\n\x1b[92mCONGRATULATIONS, YOU FOUND THE WORD !\n");
            break;
        }
        else if (choosedWord !== randomWord && r === 5)
        {
            console.log('\n\x1b[91mTRY AGAIN.');
            console.log(`The word was \x1b[92m${randomWord}\n`);
            break;
        }
        console.log(wordArray);
    }

}

wordle();