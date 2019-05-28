var     money = prompt("Ваш бюджет на месяц?", ""),
        time = prompt("Введите дату в формате YYYY-MM-DD", "");


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpencess: null,
    income: null,
    savinvings: false
};

var     ansver1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        ansver2 = prompt("Во сколько обойдется?", ""),
        ansver3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        ansver4 = prompt("Во сколько обойдется?", "");

appData.expenses.ansver1 = ansver2;
appData.expenses.ansver3 = ansver4;

alert("Ваш бюджет на день составляет: " + appData.budget/30);