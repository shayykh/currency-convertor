#!/usr/bin/env node
import inquirer from "inquirer";
console.log(`* Welcome to Currency Converter! *`);
const currency = {
    USD: 1, //Base Currency
    EUR: 0.93,
    GBP: 0.79,
    PKR: 278.5,
    INR: 83.55,
    AUD: 1.51,
    CAD: 1.39,
    SGD: 1.35,
    MYR: 4.72,
    JPY: 157.2,
    CNY: 7.26,
    SAR: 3.75,
};
const currencyNames = {
    "US Dollar (USD)": "USD",
    "Euro (EUR)": "EUR",
    "British Pound (GBP)": "GBP",
    "Pakistani Rupee (PKR)": "PKR",
    "Indian Rupee (INR)": "INR",
    "Australian Dollar (AUD)": "AUD",
    "Canadian Dollar (CAD)": "CAD",
    "Singapore Dollar (SGD)": "SGD",
    "Malaysian Ringgit (MYR)": "MYR",
    "Japanese Yen (JPY)": "JPY",
    "Chinese Yuan (CNY)": "CNY",
    "Saudi Riyal (SAR)": "SAR",
};
const questions = await inquirer.prompt([
    {
        type: "input",
        name: "amount",
        message: "Enter amount to convert: ",
    },
    {
        type: "list",
        name: "from",
        message: "Select currency to convert from",
        choices: Object.keys(currencyNames),
    },
    {
        type: "list",
        name: "to",
        message: "Select currency to convert to",
        choices: Object.keys(currencyNames),
    },
]);
const fromCurrencyCode = currencyNames[questions.from];
const toCurrencyCode = currencyNames[questions.to];
const amount = parseFloat(questions.amount);
const fromCurrencyRate = currency[fromCurrencyCode];
const toCurrencyRate = currency[toCurrencyCode];
const baseAmount = amount / fromCurrencyRate;
const result = baseAmount * toCurrencyRate;
console.log(`${amount} ${questions.from} = ${result.toFixed(2)} ${questions.to}`);
