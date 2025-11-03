import { select } from "@inquirer/prompts";


interface MenuOption {
    key: string,
    label: string,
    action: () => Promise<unknown>| void,
}

const separator = () => "=".repeat(process.stdout.columns);

function clearScreen() {
    console.clear();
}

function showHeader() {
    console.log(separator());
    console.log("Personal Expense Tracker");
    console.log(separator());
    console.log(`Today: ${new Date().toLocaleDateString()}`);
    console.log(separator());
}

async function showMenu(options: MenuOption[]) {
    const action = await select({
        message: "Choose an option",
        loop: true,
        choices: options.map((option) => {
            return {
                name: option.label,
                value: option.action,
            }
        }),
    });
    return action;
}

export {
    separator,
    clearScreen,
    showHeader,
    showMenu,
    MenuOption,

}