function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChar = "!@#$%^&*()-=+_"; 

    let allowedChars = "";
    let password = "";

   
    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChar : "";  
    
    if (length <= 0) {
        return `(Password length must be at least 1)`;
    }

    
    if (allowedChars.length === 0) {  
        return `(At least 1 set of characters needs to be selected)`;
    }

    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}


const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(
    passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols
);

console.log(`Generated Password: ${password}`);