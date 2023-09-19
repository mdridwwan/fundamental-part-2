// "use strict";
//  let hasDriversLicense = true;
//  const passTest = true;

//  if(passTest) hasDriversLicense = true;
//  if(hasDriversLicense) console.log("I can drive :D");

//  let interFace = "Audio";
//  let private = "book";
// const if = 23;

// function logger(a,b){
//     console.log("My Name is Ridwan");
//     console.log(a+b);
// }

// logger(10,20);
// logger(40,60);


// function fruitProcessor(apples, oranges){
//     // console.log(apples, oranges);
//     const juice =`Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5,0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(4,3);
// console.log(appleOrangeJuice);

// const num = Number('25');


// </-------Function declaration--------/>
// function calcAge1(birthYear){
//     return 2023 - birthYear;
// }
// const age1 = calcAge1(2002);


// </------Function expression------/>
// const calcAge2 = function(birthYear){
//     return 2023 - birthYear;
// }
// const age2 = calcAge2(2002);

// console.log(age1, age2);

// </--------Arrow Function-------------/>

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(2002);
// console.log(age3);

// const yearsUntilRetiremnet = (birthYear, firstName) =>{
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetiremnet(2002, "MD Ridwan"))
// console.log(yearsUntilRetiremnet(1996, "Jamal"))


// </------Calling Another Function------/>
// const cutPicecs = function(fruit){
//     return fruit * 3;
// }

// const fruitProcessor = function(apples, oranges){
//     const applePieces = cutPicecs(apples);
//     const orangePieces = cutPicecs(oranges);

//     const juice =`Juice with ${applePieces} apples pieces and ${orangePieces} oranges pieces.`;
//     return juice;
// }

// console.log(fruitProcessor(2,4));

// // joto tk ddibe tar 2gon pabe bonus.
// const bonus = function(tk){
//     return tk * 2;
// }
// // function totalBouns(){}
// const totalBouns = function(tk){
//     const bonusPabe = bonus(tk);
//     return `${tk}tk bonus pabe ${bonusPabe}tk.`
// }

// console.log(totalBouns(100));

// switch(2021){
//     case 2021:
//         text = "today is good";
//         break;
//     default:
//         text = "another day"
// }
// console.log(text)

////////////////////////////////////////
// const calcAge = function(y){
//     return 2023 - y;
// }

// const yearsUntilRetiremnet = function(birthYear, firstName){
//     const age = calcAge(birthYear);
//     const retirement = 65 - age; 

//     if(retirement > 0){
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     }else{
//         console.log(`${firstName} has already reired :)`);
//         return -1;
//     }
//     // return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearsUntilRetiremnet(2003, "Ridwan"));
// console.log(yearsUntilRetiremnet(1953, "Jamal"))
/*
// Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and
the Koalas! There is a new gymnastics discipline,
which works differently.
Each team competes 3 times, and then the average of
the 3 scores is calculated (so one average score per
team).
A team ONLY wins if it has at least DOUBLE the
average score of the other team, Othervise, no team wins!


1, Create an arrow function 'calcAverage to
calculate the average of 3 scores
2. Use the function to calculate the average for both
teams
3, Create a function `checkWinner' that takes the
average score of each team as parameters
("avgDolhins' and 'avgKoalas'), and then logs the
winner to the console, together with the victery
points, according to the rule above, Example: "Koalas
win (30 vs, 13)"
4. Use the "checkWinner" function to determine the winner for both DATA 1 DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphines score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphines score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate avarage of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's avarege scores.

GOOG LUCK :)

*/

// const calcAverage = (a,b,c) =>{
//     const total = a + b + c;
//     return total / 3;
// }

// const checkWinner = function(avravgDolhins, avgKoalas){
//     // console.log(2 * avgKoalas)
//     // console.log(2 * avravgDolhins)

//     if(avravgDolhins >= 2 * avgKoalas){
//         return(`Dolpines win (${avravgDolhins} vs, ${avgKoalas}).`)
        
//     }else if(avgKoalas >= 2 * avravgDolhins){
//         return(`Koalas win (${avgKoalas} vs, ${avravgDolhins}).`)
//     }else{
//         return(`Not Winner any Teams, Point:(Dolpines ${avravgDolhins} vs, Koalas ${avgKoalas}).`)
//     }

   
// }

// const avravgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);
// // console.log(avravgDolhins);
// // console.log(avgKoalas)
// const winner = checkWinner(avravgDolhins, avgKoalas);
// console.log(winner)

// </--Popar Ruls---/>

// task 1
// const calcAverage = (a, b, c) => (a + b + c) / 3;

// // task 2
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolhins, avgKoalas){
//     if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
//     }else if(avgDolhins >= 2 * avgKoalas){
//         console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
//     }
//     else{
//         console.log("No team wins....")
//     }
// }

// checkWinner(scoreDolphins,scoreKoalas);

/////////////////////////////////////////////

// </------Array--------/>

// const friend1 = 'Sajid';
// const friend2 = 'Antor';
// const friend3 = 'Ridwan';

// const friends = ['Sajid', 'Antor', 'Ridwan', 'Farhan', 'Jisan'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[4]);
// console.log(friends.length);

// friends[4] = 'Rohan';
// console.log(friends)
// console.log(friends[friends.length - 1]);
// console.log(friends[4]);

// const firstName = "Ridwan"
// const listFriend = [firstName, 'Jannar', 2023 - 2002, 'teacher', friends];
// console.log(listFriend);

// Ecercies
// const calcAge = birthYear => 2023 - birthYear;

// const year = [1990, 1995, 2000, 2002, 2005];

// const age1 = calcAge(year[0]);
// const age2 = calcAge(year[1]);
// const age3 = calcAge(year[2]);
// const age4 = calcAge(year[3]);
// const age5 = calcAge(year[year.length - 1]);
// const ages = [calcAge(year[0]),calcAge(year[1]), calcAge(year[2]),calcAge(year[3]),calcAge(year[year.length - 1])]
// console.log(age1,age2,age3,age4,age5)
// console.log(ages);

///////////

// const friendList = ['Rahat', 'Shuvo', 'samir', 'rohan']
// const myDetails = {
//     name: "Ridwan",
//     age: 21,
//     roll: 478773,
//     city: 'Narayanganj',
// }

// const friends = ['Ridwan','sajid', 'antor'];
// // add elementa;
// friends.push('Jisan');
// friends.push(friendList);
// friends.push(myDetails);
// console.log(friends);

// // first add elements
// friends.unshift('Jannat')
// console.log(friends);

// //remove elements;
// const pops = friends.pop();
// // remove unshift element
// friends.shift()


console.log(friends )
console.log(friends.indexOf('Ridwan'))
console.log(friends.indexOf('Jannat'))

// includes elemnets check true or false;
friends.push(23);
console.log(friends.includes('Ridwan'))
console.log(friends.includes('Jannat'))
console.log(friends.includes(23))

//if check includes elements
if(friends.includes('Jisan')){
    console.log("You Have a friend called Jisan")
}else{
    console.log("Not jisan name")
}