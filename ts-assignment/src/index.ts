// *** Ignore the following lines ***
import chalk from "chalk";
import prompt from "prompt-sync";
// *** Ignore the above lines ***

// Use the following function to read input from the user:
const readLine = prompt({ sigint: true });

function runExerciseOne() {
  const firstName = "Rasmus";
  const lastName = "Hedin";
  console.log(
    `Hello ${firstName} ${lastName}! I'm glad to inform you that you are the test subject for my first assignment!`
  );
}

function runExerciseTwo() {
  const firstName: string = readLine("Enter first name: ");
  const lastName: string = readLine("Enter last name: ");
  console.log(`Hello ${firstName} ${lastName}! Have a nice day!`);
}

function runExerciseThree() {
  const num31: number = 10.5;
  const num32: number = 15;
  const result: number = num31 + num32;
  console.log(result);

  const oddNumber: number = 7;
  const evenNumber: number = 10;
  console.log(`Odd: ${oddNumber} / Even: ${evenNumber} is: ${oddNumber / evenNumber}`)
}

function runExerciseFour() {
  console.log("Skipped");
}

function runExerciseFive() {
  const num51: number = Number(readLine("Enter a number: "));
  const num52: number = Number(readLine("Enter another number: "));

  if (num51 + 1 === num52) {
    console.log("Consecutive");
  }
  else if (num51 - 1 === num52) {
    console.log("Consecutive");
  }
  else {
    console.log("Not consecutive");
  }
}

function runExerciseSix() {
  const num61: number = Number(readLine("Enter a number: "));
  num61 % 2 == 0 ? console.log("Even") : console.log("Odd");
}

function runExerciseSeven() {
  const bodyTemp: number = Number(readLine("Enter your body temperature: "));
  bodyTemp > 37.5 ? console.log("You have a fever!") : console.log("No worries, you don't have a fever :)");
}

function runExerciseEight() {
  const grade: string = readLine("Enter your grade: ").toLowerCase();
  switch (grade) {
    case "a":
      console.log("AN A!!! GREAT JOB!");
      break;
    case "b":
      console.log("B! Good job!");
      break;
    case "c":
      console.log("Good job, but you can do better");
      break;
    case "d":
      console.log("Are you even trying at this point?");
      break;
    case "e":
      console.log("Get out of my house you disgrace");
      break;
    default:
      console.log("That's not a valid grade (A, B, C, D, E)");
  }
}

function runExerciseNine() {
  const userInput: string = readLine("Enter a string to see if it's a palindrome: ");
  const maybePalindrome: string = userInput.toLowerCase().replace(/[^a-z0-9]/g, "");;
  let y: number = maybePalindrome.length - 1;
  let isPalindrome: boolean = true;

  for (let i = 0; i <= y; i++) {
    if (maybePalindrome[i] !== maybePalindrome[y]) {
      console.log(`${maybePalindrome} isn't a palindrome!`);
      isPalindrome = false;
      break;
    }
    y--;
  }

  if (isPalindrome) {
    console.log(`${maybePalindrome} is a palindrome!`);
  }
}

function runExerciseTen() {
  // A
  let str: string = "The quick fox Jumped Over the DOG";
  str = str.toLowerCase();
  str = str.replace("quick", "brown");
  str = str.replace("dog", "lazy dog");
  str = str.charAt(0).toUpperCase() + str.slice(1);
  console.log(str);

  // B
  const string1 = readLine("Enter a string: ");
  const string2 = readLine("Enter a string: ");
  string1 === string2 ? console.log("Same string") : console.log("Not the same string");

  // C
  const donkey: string = "Donkey";
  const monkey: string = donkey.replace("D", "M");
  console.log(monkey);

  // D
  const longText: string = "I am going to visit Kolmården zoo tomorrow. I am a big fan of the dolphin show. I may watch all dolphin shows during the day. I would like to take a gondola safari as well. I wish to visit Bamse and his team there."
  const fixedLongText = longText.replace(/I|am/g, (match) => {
    if (match === "I") return "We";
    if (match === "am") return "are";
    return match;
  });
  console.log(fixedLongText);

  // E
  const singerString: string = "She is the popular singer.";
  const mostPosition: number = 11;
  const most: string = "most ";
  const mostSingerString: string = singerString.slice(0, mostPosition) + most + singerString.slice(mostPosition);
  console.log(mostSingerString);

  // F
  const friendString: string = "A friend is the asset of your life.";
  const truePosition: number = 2;
  const trueString: string = "true ";
  const trueFriendString: string = friendString.slice(0, truePosition) + trueString + friendString.slice(truePosition).replace("asset", "greatest asset");
  console.log(trueFriendString);

  // G
  const sebString: string = "My name is Sebastian Vallin.";
  const shortSebString: string = sebString.slice(11);
  console.log(shortSebString);

  // H
  // ??????????????????????????????????????????????????
}

function runExerciseEleven() {
  console.log("Skipped");
}

function runExerciseTwelve() {
  const num: number = Number(readLine("Enter a number less than 100: "));
  if (num >= 100 || num < 1) {
    console.log("Number must be between 1 and 99!");
  } else {
    console.log("Ascending order:");
    for (let i = 1; i <= num; i++) {
      console.log(i);
    }

    console.log("\nDescending order:");
    for (let i = num; i >= 1; i--) {
      console.log(i);
    }
  }
}

function runExerciseThirteen() {
  const secretNumber: number = Math.floor(Math.random() * 10) + 1;
  let secretNumberGuess: number;
  do {
    secretNumberGuess = Number(readLine("Guess a number between 1-10 (0 to exit): "));
    if (secretNumberGuess === secretNumber) {
      console.log(`You guessed correct! The secret number was ${secretNumber}`);
    }
    else if (secretNumberGuess === 0) {
      console.log("Thanks for playing!");
    }
    else {
      console.log("Wrong try again!");
    }
  } while (secretNumberGuess !== secretNumber && secretNumberGuess !== 0);
}

function runExerciseFourteen() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      process.stdout.write(`|${i * j}`);
    }
    process.stdout.write(`|`);
    console.log();
  }
}

function runExerciseFifteen() {
  console.log("Skipped");
}

function runExerciseSixteen() {
  console.log("Skipped");
}

function runExerciseSeventeen() {
  console.log("Skipped");
}

function runExerciseEighteen() {
  console.log("Skipped");
}

function runExerciseNineteen() {
  const height: number = Number(readLine("Add height to triangle: "));
  const width: number = Number(readLine("Add height to width: "));

  console.log(triangleArea(height, width));

  function triangleArea(height: number, width: number): number {
    return (height * width) * 0.5;
  }
}

function runExerciseTwenty() {
  let swapNum1: number = 5;
  let swapNum2: number = 10;


  console.log(`Before swap swapNum1: ${swapNum1}, swapNum2: ${swapNum2}`);
  swap(swapNum1, swapNum2);
  function swap(swapNum1: number, swapNum2: number): void {
    let temp: number = swapNum1;
    swapNum1 = swapNum2;
    swapNum2 = temp;
    console.log(`Swapped numbers swapNum1: ${swapNum1}, swapNum2: ${swapNum2}`);
  }
}

function runExerciseTwentyOne() {
  const dateOfBirthString: string = readLine("Enter date of birth (yyyy-mm-dd): ");
  console.log(getAge(dateOfBirthString));
}

function getAge(dateOfBirthString: string): number {
  const today = new Date();
  const dateOfBirth = new Date(dateOfBirthString);

  let age = today.getFullYear() - dateOfBirth.getFullYear();

  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  const dayDiff = today.getDate() - dateOfBirth.getDate();

  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    age--;
  }
  return age;
}

function runExerciseTwentyTwo() {
  const nameBar: string = readLine("Please enter your name: ");
  const dateOfBirthBar: string = readLine(`Welcome ${nameBar}, What's your date of birth? (yyyy-mm-dd): `);

  getAge(dateOfBirthBar) >= 18 ? serveBeer() : serveCoke();

  function serveBeer() {
    const orderBar: string = readLine("Do you want to have a beer? (yes/no): ").toLocaleLowerCase();
    switch (orderBar) {
      case "yes":
        console.log("Serving Beer");
        break;
      case "no":
        serveCoke();
    }
  }

  function serveCoke() {
    const orderBar = readLine("Do you want a coke? (yes/no): ").toLocaleLowerCase();
    switch (orderBar) {
      case "yes":
        console.log("Serving Coke");
        break;
      case "no":
        nothingElse();
    }
  }
  function nothingElse() {
    console.log("No more options");
  }
}

function runExerciseTwentyThree() {
  const numbers21: string = readLine("Enter a string of numbers (ex: 1,2,34,55,65,92): ");
  const arrayNumber21 = numbers21.split(",").map(num => Number(num));
  let average = 0;
  let max = Number.MIN_VALUE;
  let min = Number.MAX_VALUE;
  arrayNumber21.forEach(number => {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number;
    }
    average += number;
  });
  console.log(`Min = ${min}\nMax = ${max}\nAverage = ${average / arrayNumber21.length}`);
}

function runExerciseTwentyFour() { }

function runExerciseTwentyFive() { }

function runExerciseTwentySix() { }

function runExerciseTwentySeven() { }

function runExerciseTwentyEight() { }

function runExerciseTwentyNine() { }

function runExerciseThirty() { }

function runExerciseThirtyOne() { }

function runExerciseThirtyTwo() { }

function runExerciseThirtyThree() { }

function runExerciseThirtyFour() { }

/* ^^^^^^^^^^^^  Add the rest of the exercise functions above this line ^^^^^^^^^^^^ */

let keepAlive = true;
console.clear();
while (keepAlive) {
  try {
    const assignmentChoice = parseInt(
      readLine("Enter assignment number (ctrl + C or -1 to exit): ")
    );
    console.log();
    switch (assignmentChoice) {
      case 1:
        runExerciseOne();
        break;
      case 2:
        runExerciseTwo();
        break;
      case 3:
        runExerciseThree();
        break;
      case 4:
        runExerciseFour();
        break;
      case 5:
        runExerciseFive();
        break;
      case 6:
        runExerciseSix();
        break;
      case 7:
        runExerciseSeven();
        break;
      case 8:
        runExerciseEight();
        break;
      case 9:
        runExerciseNine();
        break;
      case 10:
        runExerciseTen();
        break;
      case 11:
        runExerciseEleven();
        break;
      case 12:
        runExerciseTwelve();
        break;
      case 13:
        runExerciseThirteen();
        break;
      case 14:
        runExerciseFourteen();
        break;
      case 15:
        runExerciseFifteen();
        break;
      case 16:
        runExerciseSixteen();
        break;
      case 17:
        runExerciseSeventeen();
        break;
      case 18:
        runExerciseEighteen();
        break;
      case 19:
        runExerciseNineteen();
        break;
      case 20:
        runExerciseTwenty();
        break;
      case 21:
        runExerciseTwentyOne();
        break;
      case 22:
        runExerciseTwentyTwo();
        break;
      case 23:
        runExerciseTwentyThree();
        break;
      case 24:
        runExerciseTwentyFour();
        break;
      case 25:
        runExerciseTwentyFive();
        break;
      case 26:
        runExerciseTwentySix();
        break;
      case 27:
        runExerciseTwentySeven();
        break;
      case 28:
        runExerciseTwentyEight();
        break;
      case 29:
        runExerciseTwentyNine();
        break;
      case 30:
        runExerciseThirty();
        break;
      case 31:
        runExerciseThirtyOne();
        break;
      case 32:
        runExerciseThirtyTwo();
        break;
      case 33:
        runExerciseThirtyThree();
        break;
      case 34:
        runExerciseThirtyFour();
        break;

      /* ^^^^^^^^^^^^  Add the rest of the exercises above this line ^^^^^^^^^^^^ */
      case -1:
        keepAlive = false;
        break;
      default:
        console.log(chalk.red("That is not a valid assignment number!"));
        break;
    }
    if (assignmentChoice !== -1) {
      console.log();
      readLine(chalk.dim("Press enter to continue..."));
      console.clear();
    } else {
      console.log(chalk.green("Exiting..."));
    }
  } catch (err) {
    console.log(chalk.red(err));
  }
}
