/*
    qestion
    =========================//=========================//=========================
    প্রাকটিস চ্যালেঞ্জ-1:
    =========================//=========================//=========================

    নিচের ভেরিয়েবল ডিক্লেয়ার এ কোনটার মধ্যে কি কি সমস্যা আছে। দেখতো বের করতে পারো কিনা?
    Var price = 33
    var name - Shabana
    var boxName = ‘Cocola;
    var 88_price = 34;
    var enum = -1;
    var _$box’78 = ‘Monika’;
    var home-address = “kochu khet”; 
*/

//-------- Answer
/* 
    var price = 33;
    var name = 'shabana';
    var boxName = 'cocola';
    var price_88 = 34;
    var eNum = 1;
    var box78 = 'Monika';
    var homeAddress = 'Kochu khet';
 */

    

// qestion

// Practice Problem 1:
// =========================//=========================//=========================

/* 
    Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
    help Harry calculate how much money the shopkeeper will return.
    Input:
    The first line of the input is the taka Harry’s mom gave him.
    The second line is the cost of 1 kg of oranges and 1 kg of apples.
    Output:
    Print the result.

    Sample Input:
    1000
    700
    Output:
    300
 */
// ------Answer
/* 
    var harryMomGive = 1000;
    var orangesPrice = 350;
    var applesPrice = 350;
    var harryShoping = orangesPrice + applesPrice;
    var shopKeeperReturn = harryMomGive - harryShoping;
    console.log('Shpop Keeper Return:', shopKeeperReturn);
 */

/* 
    =========================//=========================//=========================
    Practice Problem 2:
    =========================//=========================//=========================
    
    Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
    Bangla of a student.
    Input:
    The first line of the input is the marks of the five subjects mentioned above, respectively.
    Output:
    Print the result in 2 decimal places.
    
    
    Sample Input:
    75.25, 65, 80, 35.45, 99.50
    Output:
    71.04 
*/
// ---Answer

/* 
    let Mathematics = 75.25;
    let Biology = 65;
    let Chemistry = 80;
    let Physics = 35.45;
    let Bangla = 99.50;

    let allMark = Biology + Mathematics + Chemistry + Physics + Bangla;
    let markAvrg = allMark / 5;
    var sum = parseFloat(markAvrg.toFixed(2));
    console.log(sum) 
*/

/* 
    =========================//=========================//=========================
    Practice Problem 3 :
    =========================//=========================//=========================

    John’s teacher gave him two variables. Each variable contains a string. John’s teacher asked him to
    combine these two strings and print them in one line. Help John write the program.
    Input:
    The first and the second lines of the input contain the strings.
    Output:
    Print the result in one line.

    Sample Input:
    I am going to be
    an awesome web developer
    Output:
    I am going to be an awesome web developer 
*/

// ---------------Answer


/* 
    var fristInput = 'I am going to be ';
    var lastInput = 'an awesome web developer';
    var fullOutput = fristInput + lastInput;
    console.log(fullOutput); 
*/


/* 
    =========================//=========================//=========================
    Practice Problem 4 :
    =========================//=========================//=========================

    Sarah’s mother is teaching her mathematics. She gave Sarah a number and asked her what the
    remainder would be if she divided the number by 5. Help Sarah write the program.
    Input:
    The first line of the input contains the number.
    Output:
    Print the remainder.

    Sample Input:
    119

    Output:
    4 
*/

// ---------------Answer

/*
    let giveNumber = 119;
    let remainder = giveNumber % 5;
    console.log(remainder); 
*/