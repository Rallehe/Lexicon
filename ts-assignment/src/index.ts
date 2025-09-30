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
  const grade = readLine("Enter your grade: ").toLowerCase();
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
  let isPalindrome = true;

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
  let str = "The quick fox Jumped Over the DOG";

  str = str.toLowerCase();
  str = str.replace("quick", "brown");
  str = str.replace("dog", "lazy dog");
  str = str.charAt(0).toUpperCase() + str.slice(1);

  console.log(str);
}

function runExerciseEleven() {
  console.log("Skipped");
}

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
