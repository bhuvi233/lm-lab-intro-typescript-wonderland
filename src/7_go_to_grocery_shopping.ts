import { askQuestion, clear, print } from "../console";
import { endAdventure, haveAdventures } from "..";

interface PassCode {
    name: string,
    password?: string,
    code?: number
}

export function goToGroceryShopping() : void {
    clear(true);
    print('Time to have breakfast..!!');
    print('OOPS... running out of groceries');

    const passCode = getPassCode();

    if (((passCode.password) && validate(passCode.password, "Alice")) && 
        ((passCode.code) && validate(passCode.code, 1234)))
        print(
            '✅ CONGRATULATIONS! You successfully made it through Wonderland Grocery Shop! 🥳'
        );
    else {
        print('Sadly you are locked out of Grocery Shop 😭 ');
        return endAdventure();
    }

    return askQuestion(
        'Press ENTER to re-enter Wonderland! ',
        haveAdventures
    );
}

function getPassCode() : PassCode {
    return ({
        name: 'Alice',
        password: 'Alice',
        code: 1234
    })
}

function validate<T> (input: T, expected: T) : boolean {
    return (input === expected);
}