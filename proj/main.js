// 1
// var a = 10;
// if (a === 10) {
//     console.log('Верно');
// } else {
//     console.log('Неверно');
// }

// 2
// var min = 34;
// var lang = 'ru';
// var quarters = ['', 'Первая четверть', 'Вторая четверть', 'Третья четверть', 'Четвертая четверть'];
// var days = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// };

// console.log(quarters[Math.floor(min / 15) + 1]);
// var arr = days[lang];


// Раaбота с if-else 
// 1 
// var a = 1;
// if (a == 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a == 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = -3;
// if (a == 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 2 
// var a = 1;
// if (a > 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a > 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = -3;
// if (a > 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 3 
// var a = 1;
// if (a < 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a < 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = -3;
// if (a < 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 4 
// var a = 1;
// if (a >= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a >= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = -3;
// if (a >= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 5 
// var a = 1;
// if (a <= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a <= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }
 

// var a = -3;
// if (a <= 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 6 
// var a = 1;
// if (a != 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 0;
// if (a != 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = -3;
// if (a != 0) {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 7 
// var a = 'test';
// if (a == 'test') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 'тест';
// if (a == 'test') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 3;
// if (a == 'test') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// 8 
// var a = '1';
// if (a === '1') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 1;
// if (a === '1') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }


// var a = 3;
// if (a === '1') {
//   console.log('верно');
// } else {
//   console.log('неверно');
// }



// Работа с && (и) и || (или)

// 1 
// var a = 5;

// if (a > 0 && a < 5) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }




// 2
// var a = 5;

// if (a === 0 || a === 2) {
//     a += 7;
// } else {
//     a /= 10;
// }

// console.log(a);



// 3 
// var a = 1;
// var b = 3;

// if (a <= 1 && b >= 3) {
//     console.log(a + b);
// } else {
//     console.log(a - b);
// }



// 4 
// var a = 5;
// var b = 7;

// if ((a > 2 && a < 11) || (b >= 6 && b < 14)) {
//     console.log('верно');
// } else {
//     console.log('неверно');
// }


//Задача на switch-case
// var num = 3;
// var result;

// switch (num) {
//   case 1:
//     result = 'зима';
//     break;
//   case 2:
//     result = 'весна';
//     break;
//   case 3:
//     result = 'лето';
//     break;
//   case 4:
//     result = 'осень';
//     break;
//   default:
//     result = 'недействительное значение';
// }

// console.log(result);


// Задача
// 1 
// let day = 15;
// let decade = Math.ceil(day/10);
// console.log(Число ${day} попадает в ${decade} декаду);


// 2 
// let month = 7;
// let season = "";
// if (month >= 3 && month <= 5) {
//   season = "весна";
// } else if (month >= 6 && month <= 8) {
//   season = "лето";
// } else if (month >= 9 && month <= 11) {
//   season = "осень";
// } else {
//   season = "зима";
// }
// console.log(Месяц ${month} попадает в сезон ${season});


// 3 
// let str1 = "abcde";
// let firstChar = str1.charAt(0);
// if (firstChar === "a") {
//   console.log("да");
// } else {
//   console.log("нет");
// }


// 4 
// let str2 = "12345";
// let firstDigit = str2.charAt(0);
// if (firstDigit === "1" || firstDigit === "2" || firstDigit === "3") {
//   console.log("да");
// } else {
//   console.log("нет");
// }


// 5 
// let str3 = "123";
// let sum = Number(str3[0]) + Number(str3[1]) + Number(str3[2]);
// console.log(Сумма цифр: ${sum});


// 6 
// let str4 = "123456";
// let sum1 = Number(str4[0]) + Number(str4[1]) + Number(str4[2]);
// let sum2 = Number(str4[3]) + Number(str4[4]) + Number(str4[5]);
// if (sum1 === sum2) {
//   console.log("да");
// } else {
//   console.log("нет");
// }
