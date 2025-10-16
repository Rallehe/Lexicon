import { separator } from "./menu";
import { input } from "@inquirer/prompts";

interface Expense {
    id: number,
    amount: number,
    description: string,
    date: Date,
}

interface ExpenseData {
    expenses: Expense[],
    nextId: () => number,
}

function createIdGenerator() {
    let currentId = 1;
    return () => {
        return currentId++;
    }
}

const data: ExpenseData = {
    expenses: [],
    nextId: createIdGenerator(),
}

const formatNumber = new Intl.NumberFormat(undefined, {
    style: "currency",
    currency: "EUR",
}).format;

export function listExpenses(): void {
    if (data.expenses.length === 0) {
        return console.log("No Expenses recorded yet.");
    }

    console.log("Your Expenses:");
    data.expenses.forEach(expense => {
        console.log(`${expense.id}. ${formatNumber(expense.amount)} - ${expense.description}. ${expense.date}`);
    });
}

export function totalExpenses() {
    const total = data.expenses.reduce((sum, expense) => {
        return sum + expense.amount;
    }, 0);
    console.log("Total Expenses");
    console.log(separator());
    console.log("Total spent: ", formatNumber(total));
    console.log("Number of expenses: ", data.expenses.length);

    if (total > 0 && data.expenses.length > 0) {
        const average = total /data.expenses.length;
        console.log("Average per expense", formatNumber(average));
    }
}

async function getAmountInput(): Promise<number> {
    const amountStr = await input({
        message: "Amount: ",
        required: true,
        validate(value) {
            const parsedValue = parseFloat(value);
            return isNaN(parsedValue) ? `Provide a valid number` : true;
        },
    });
    return parseFloat(amountStr.replace(",", "."));
}

async function getDescriptionInput(): Promise<string> {
    return await input({
        message: `Description: `,
        required: true,
    })
}

export async function addExpenses() {
    console.log("Add New Expense: ") ;

    const amount = await getAmountInput();
    const description = await getDescriptionInput();

    const newExpense: Expense = {
        id: data.nextId(),
        amount: amount,
        description: description,
        date: new Date(),
    };

    data.expenses.push(newExpense);
}

