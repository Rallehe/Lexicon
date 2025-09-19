class Customer {
    static customers = [];
    constructor(customerId, name, email) {
        this.customerId = customerId;
        this.name = name;
        this.email = email;
    }
    printCustomer() {
        return `${this.name}, ID: ${this.customerId}, Email: ${this.email}`;
    }
    static createCustomer(customerId, name, email) {
        if (Customer.customers.find(c => c.customerId === customerId)) {
            console.log(`Customer with ID: ${customerId} already exists`);
            return null;
        }
        let newCustomer = new Customer(customerId, name, email);
        this.customers.push(newCustomer);
        return newCustomer;
    }
    static displayAllCustomers() {
        console.log("All Customers:");
        this.customers.forEach(c => console.log(c.printCustomer()));
    }
}

class BankAccount {
    static accounts = [];
    constructor(customer, balance) {
        this.customer = customer;
        this.balance = balance;
        BankAccount.accounts.push(this);
    }
    printAccountInfo() {
        return `${this.customer.printCustomer()} has a bank account with balance: ${this.balance}`;
    }
    static displayAllAccounts() {
        console.log("\nAll Accounts:");
        this.accounts.forEach(acc => console.log(acc.printAccountInfo()));
    }
}

class SavingsAccount extends BankAccount {
    constructor(customer, balance, interestRate) {
        super(customer, balance);
        this.interestRate = interestRate;
    }
    printAccountInfo() {
        return `${this.customer.printCustomer()} has a Savings Account with balance: ${this.balance}, Interest Rate: ${this.interestRate}%`;
    }
}

class LoanAccount extends BankAccount {
    constructor(customer, balance, interestRate, loanAmount) {
        super(customer, balance);
        this.interestRate = interestRate;
        this.loanAmount = loanAmount;
    }
    printAccountInfo() {
        return `${this.customer.printCustomer()} has a Loan of ${this.loanAmount}, Balance to pay: ${this.balance}, Interest Rate: ${this.interestRate}%`;
    }
}

let c1 = Customer.createCustomer(1, "Rasmus", "rasmus@mail.com");
let c2 = Customer.createCustomer(2, "Oskar", "oskar@mail.com");
let c3 = Customer.createCustomer(3, "Johan", "johan@mail.com");
let c4 = Customer.createCustomer(4, "Jakob", "jakob@mail.com");
let c5 = Customer.createCustomer(5, "Karl", "karl@mail.com");
let c6 = Customer.createCustomer(5, "Karl", "karl@mail.com");

let s1 = new SavingsAccount(c1, 5000, 2.5);
let s2 = new SavingsAccount(c2, 10000, 3.0);
let s3 = new SavingsAccount(c3, 7500, 2.0);
let s4 = new SavingsAccount(c4, 2000, 2.5);
let s5 = new SavingsAccount(c5, 12000, 4.0);

let l1 = new LoanAccount(c1, 20000, 5.0, 15000);
let l2 = new LoanAccount(c2, 50000, 6.5, 40000);
let l3 = new LoanAccount(c3, 10000, 4.0, 8000);
let l4 = new LoanAccount(c4, 30000, 5.5, 25000);
let l5 = new LoanAccount(c5, 15000, 3.5, 12000);

Customer.displayAllCustomers();
BankAccount.displayAllAccounts();
