import * as menu from "./menu.ts";
import { input } from "@inquirer/prompts";
import { listExpenses, totalExpenses, addExpenses } from "./expense.ts";

async function main() {
    const menuOptions: menu.MenuOption[] = [
        { key: "1", label: "Add Expense", action: addExpenses },
        { key: "2", label: "List All Expenses", action: listExpenses },
        { key: "3", label: "Show Total", action: totalExpenses },
        { key: "4", label: "Exit", action: handleExit },
    ];

    while (true) {
        menu.clearScreen();

        menu.showHeader();
        console.log();

        const action = await menu.showMenu(menuOptions);

        await action();
        await input({
            message: "Press ENTER to continue...",
        });
    }
}

main();


function handleExit() {
    console.clear();
    console.log("\nThanks for using the Expense Tracker!");
    process.exit();
}