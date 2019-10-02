let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", ''),
    
    appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
        console.log("done")
        appData.expenses.a = b;
    } else {
        i--; 
    }
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
//                  console.log("done")
//                  appData.expenses.a = b;
//                   } else {
//                      i--;
//                   }
                
//     i++;
// }

// let i = 0;
// do  {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", '');
//     let b = prompt("Во сколько обойдется?", '');
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length<50) {
//                  console.log("done")
//                  appData.expenses.a = b;
//                   } else {
//                      i--;
//                   }
                
//     i++;
// } while (i <2);


 appData.monneyPerDay = appData.budget /30;
 
 alert("Ежедневный бюджет: " + appData.monneyPerDay);

 if(appData.monneyPerDay < 100) {
     console.log('Минимальный уровень достатка.' );
 } else if(appData.monneyPerDay > 100 && appData.monneyPerDay < 2000) {
     console.log('Средний уровень достатка.' );  
 } else if(appData.monneyPerDay > 2000) {
     console.log('Высокий уровень достатка.' ); 
 } else {
    console.log('Произошла ошибка.' );
 }
