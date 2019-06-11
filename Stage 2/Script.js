var money = +prompt("Ваш бюджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpencess: null,
    income: null,
    savinvings: false
};

// Цикл FOR:
// for (var i=0; i < 2; i++) {
//     var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === "string" && ((typeof (a)) != null) && ((typeof (b)) != null)
//         && a != "" && b != "" && a.length < 50) {
//         console.log ("done");
//         appData.expenses[a] = b;
//     }    

// }

// // Цикл WHILE:
// var i = 0;
// while (i < 2) {
//     var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");

//     if ((typeof (a)) === "string" && ((typeof (a)) != null) && ((typeof (b)) != null) &&
//         a != "" && b != "" && a.length < 50) {
//         console.log("Done");
//         appData.expenses[a] = b;
//     } else if (a.length > 50) {
//         alert("Значение больше 50!");
//         i--;
//     } else if (typeof (a) === "string") {
//         alert("Введите число!");
//         i--;
//     }
//     i++;
// }

// Цикл DO WHILE:
var i = 0;
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

    if ((typeof (a)) === "string" && ((typeof (a)) != null) && ((typeof (b)) != null) &&
        a != "" && b != "" && a.length < 50) {
        console.log("Done");
        appData.expenses[a] = b;
    } else if (a.length > 50) {
        alert("Значение больше 50!");
        i--;
    } else if (typeof (a) === "string") {
        alert("Введите число!");
        i--;
    }
    i++;
} while (i < 2);

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на день составляет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Ошибка");
}

console.log(appData);