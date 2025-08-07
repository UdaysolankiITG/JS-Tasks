// {
//     // Q1: Hoisting with let – What gets logged and why?
   
//    let n =+prompt("n");
//     function test() {

//      let a = n+100;
//         console.log(a); // ?
//     }
//     test();
// }

// {
// //     // Q2: How does var behave inside a block vs. the whole function?
//     function outer() {
//         var x = 10;
//         if (true) {
//             var x = 20;
//             console.log("Inside:", x); // ?
//         }
//         console.log("Outside:", x);   // ?
//     }
//     outer();


// {
//     // Q3: let shadowing – which value prints?
//     let value = 1;
//     {
//         let value = 2;
//         {
//             let value = 3;
//             console.log(value); // ?
//         }
//     }
// }

// {
//     // Q4: Modifying a const object – is this allowed?
//     const person = { name: "itgeeks", age: 20 };
//     person.name = "harshit";
//     person.city = "Dewas";
//     console.log(person); // ?
// }

// {
//     // Q5: var declared in a block – visible outside?
//     {
//         var greet = "Hello";
//     }
//     console.log(greet); // ?
// }

// {
//     // Q6: Nested let scopes – what prints?
//     let a = 10;
//     {
//         let a = 20;
//         {
//             let a = 30;
//             console.log(a); // ?
//         }
//     }
// }

// {
//     // Q7: var hoisting inside a function – first console.log?
//     function demo() {
//         console.log(message); // ?
//         var message = "Hi";
//         console.log(message); // ?
//     }
//     demo();
// }

// {
//     // Q8: Redeclaring the same identifier with var and let – error?
//     var lang = "JavaScript";
//     let lang = "Python"; // ?
//     console.log(lang);
// }

// {
//     // Q9: Hoisting and Operator Confusion
//     console.log(a1 + b1); // ?
//     var a1 = 5;
//     var b1 = 10;
// }

// {
    // Q10: Post‑Increment vs Pre‑Increment
//     let a2 = 5;
//     let b2 = a2++;
//     let c2 = ++a2;
//     console.log(a2, b2, c2); // ?
// // }

// {
//     // Q11: Type Coercion with + Operator
//     let x3 = 5;
//     let y3 = "10";
//     let result3 = x3 + y3;
//     console.log(result3); // ?
// }

// {
//     // Q12: Subtracting String from Number
//     let a4 = "100";
//     let b4 = 50;
//     let result4 = a4 - b4;
//     console.log(result4); // ?
// }

// {
//     // Q13: Compound Assignment and Reassignment
//     let x5 = 10;
//     x5 += 5;
//     x5 *= 2;
//     console.log(x5); // ?
// }

// {
//     // Q14: Equality vs Strict Equality
//     let a6 = 0;
//     let b6 = false;
//     console.log(a6 == b6);  // ?
//     console.log(a6 === b6); // ? 
// }

// {
//     // Q15: Logical AND with Assignment
//     let x7 = 0;
//     let y7 = 10;
//     let result7 = x7 && y7;
//     console.log(result7); // ?
// }

// {
//     // Q16: Logical OR with Assignment
//     let a8 = null;
//     let b8 = "Hello";
//     let result8 = a8 || b8;
//     console.log(result8); // ?
// }

// {
//     // Q17: Combining Logical & Comparison
//     let a9 = 5;
//     let b9 = 10;
//     let c9 = 15;
//     console.log(a9 < b9 && b9 < c9); // ?
// }

// {
//     // Q18: NaN Comparison and Type
//     let result10 = "abc" * 3;
//     console.log(result10);            // ?
//     console.log(typeof result10);     // ?
//     console.log(result10 == NaN);     // ?
//     console.log(Number.isNaN(result10)); // ?
// }

// /* ====================== Practical Challenges ====================== */

// {
//     // Q19: Employee Salary Calculator
//     const employee = {
//         name: "John",
//         basic: 20000,
//         hra: 5000,
//         bonus: 2000,
//     };
//     // TODO: calculate total salary (basic + hra + bonus)
//     // Log "John's total salary is: ₹XXXX"
// }

// {
//     // Q20: Temperature Converter
//     const temperatureInCelsius = 37;
//     // TODO: convert to Fahrenheit using formula: (C × 9/5) + 32
//     // Log: "Temperature in Fahrenheit: XX°F"
// }

// {
//     // Q21: Type Check and Conversion
//     let strNumber = "1234";
//     // TODO: convert using +strNumber and Number(strNumber)
// }

// {
//     // Q22: Object Property Type Challenge
//     const misc = {
//         text: "hello",
//         count: 42,
//         isActive: true,
//         nothing: null,
//         notDefined: undefined,
//     };
//     // TODO: loop keys and log `The type of property X is Y`
// }

// {
//     // Q23: Swap Two Variables Without Third Variable
//     let p = 1;
//     let q = 2;
//     // TODO: swap with [p, q] = [q, p]
// }

// {
//     // Q24: Truthy and Falsy Exploration
//     const v0 = 0;
//     const v1 = "";
//     const v2 = null;
//     const v3 = undefined;
//     const v4 = "Hello";
//     // TODO: check each with if-condition
// }

// {
//     // Q25: Pre vs Post‑Increment Game
//     let inc = 7;
//     // TODO: demonstrate ++inc and inc++ differences
// }

// {
//     // Q26: Array Type Check and Length Manipulation
//     let nums = [1, 2, 3, 4, 5];
//     // TODO: swap the index 0 and 4 elements
//     console.log(nums); // ?
// }

// {
//     // Q27: Complex Expression Evaluation
//     let x = "5" + 3 - true + null;
//     console.log(x); // ?
// }

// {
//     // Q28: Find Data Type Based on Input
//     function detectType(value) {
//         // TODO: return a message like "This is a number"
//     }
//     console.log(detectType(42));
//     console.log(detectType("js"));
//     console.log(detectType(false));
//     console.log(detectType({}));
// }

// /* ====================== Advanced Practice ====================== */

// {
//     // Q29: Pre-increment in condition
//     let score1 = 5;
//     if (++score1 === 6) console.log("Pre-increment matched 6");
// }

// {
//     // Q30: Post-increment in condition
//     let score2 = 5;
//     if (score2++ === 5) console.log("Post-increment matched 5");
// }

// {
//     // Q31: Pre-decrement in loop
//     let count1 = 3;
//     while (--count1 > 0) {
//         console.log("Loop count:", count1);
//     }
// }

// {
//     // Q32: Post-decrement in loop
//     let count2 = 3;
//     while (count2-- > 0) {
//         console.log("Post-decrement Loop:", count2);
//     }
// }

// {
//     // Q33: Post-increment assignment
//     let a5 = 1;
//     a5 = a5++;
//     console.log("What is a5 now?", a5);
// }

// {
//     // Q34: Type conversion with post-decrement
//     let x6 = "5";
//     if (x6-- === 5 && typeof x6 === "number") {
//         console.log("MCS passed");
//     }
// }

// {
//     // Q35: Tricky string-number-boolean operation
//     let tricky = "10" - true + false;
//     console.log("Tricky Result:", tricky);
// }

// {
//     // Q36: Loose vs strict equality with false
//     let val = 0;
//     console.log(val == false);
//     console.log(val === false);
// }

// {
//     // Q37: Logical AND with post-increment
//     let userLoginCount = 0;
//     let status = userLoginCount++ && "Logged In";
//     console.log("Status:", status);
// }

// {
//     // Q38: Pre-decrement in condition
//     let tries = 3;
//     if (--tries) {
//         console.log("You still have tries left");
//     }
// }

// {
//     // Q39: String increment and NaN check
//     let value = "abc";
//     value++;
//     console.log("Type:", typeof value);
//     console.log("Is NaN:", isNaN(value));
// }

// {
//     // Q40: Nested ternary operator
//     let age = 18;
//     let msg = age++ > 18 ? "Adult" : age >= 18 ? "Just turned adult" : "Minor";
//     console.log(msg);
// }

// {
//     // Q41: Logical OR and AND assignments
//     let m = 4;
//     let n = 7;
//     m = m || n;
//     n = m && n;
//     m = m < n;
//     console.log("m:", m, "n:", n);
// }

// {
//     // Q42: Chained increment in comparison
//     let p1 = 5;
//     let result = p1++ < ++p1;
//     console.log("Chained Result:", result);
// }

// {
//     // Q43: Post-increment in array index
//     const objArr = [{ id: 1 }, { id: 2 }];
//     let idx = 0;
//     objArr[idx++].id = 99;
//     console.log(objArr);
// }

// {
//     // Q44: Weird addition of special values
//     let crazy = true + false + null + undefined;
//     console.log("Crazy:", crazy);
// }

// {
//     // Q45: Block-scoped increment error
//     let x17 = 5;
//     {
//         let x17 = ++x17; // This causes an error. Why?
//         console.log(x17);
//     }
// }

// {
//     // Q46: Incrementing null
//     let something = null;
//     ++something;
//     console.log(typeof something);
// }

// {
//     // Q47: Incrementing string vs number
//     let num1 = "2";
//     let num2 = 2;
//     console.log(++num1, ++num2);
// }

// {
//     // Q48: Post-decrement in array access
//     let arr = [10, 20, 30, 40];
//     let i = 3;
//     console.log("Popped:", arr[i--]);
//     console.log("Now index:", i);
// }

// {
//     // Q49: Complex ternary with logical AND
//     let attempts = 2;
//     let finalStatus = --attempts > 0 ? "Try again" : attempts === 0 && "No attempts left";
//     console.log(finalStatus);
// }

// //  *************************************************some tricky questions**************************************************

// {
//     // Q50: typeof null is what and why?
//     let x1 = null;
//     console.log(typeof x1); // ?
// }

// {
//     // Q51: Adding undefined and a number – what happens?
//     let x2 = undefined + 10;
//     console.log(x2); // ?
// }

// {
//     // Q52: Empty string with minus
//     let x3 = "" - 1;
//     console.log(x3); // ?
// }

// {
//     // Q53: Precedence: + before comparison
//     let x4 = 1 + 2 < 3;
//     console.log(x4); // ?
// }

// {
//     // Q54: Implicit conversion in ==
//     let x5 = 0;
//     let y5 = "0";
//     console.log(x5 == y5);  // ?
//     console.log(x5 === y5); // ?
// }

// {
//     // Q55: Array to string comparison
//     let x6 = [1, 2] == "1,2";
//     console.log(x6); // ?
// }

// {
//     // Q56: Type juggling with [] and {}
//     console.log([] + {}); // ?
//     console.log({} + []); // ?
// }

// {
//     // Q57: Boolean + number + string
//     let x8 = true + 1 + "3";
//     console.log(x8); // ?
// }

// {
//     // Q58: Unusual isNaN usage
//     console.log(isNaN(" ")); // ?
// }

// {
//     // Q59: parseInt vs Number
//     console.log(parseInt("08")); // ?
//     console.log(Number("08"));  // ?
// }

// {
//     // Q60: Implicit coercion in == with null
//     console.log(null == 0);   // ?
//     console.log(null >= 0);   // ?
// }

// {
//     // Q61: Assign inside condition
//     let a12 = 5;
//     if (a12 = 0) {
//         console.log("Assigned to 0"); // ?
//     }
// }

// {
//     // Q62: Short-circuit trap with || and &&
//     let msg13 = false || "Hi" && "Bye";
//     console.log(msg13); // ?
// }

// {
//     // Q63: Ternary Chain logic
//     let score14 = 70;
//     let grade14 = score14 > 90 ? "A" : score14 > 80 ? "B" : score14 > 60 ? "C" : "F";
//     console.log(grade14); // ?
// }

// {
//     // Q64: Boolean Conversion Challenge
//     console.log(!!"false"); // ?
//     console.log(!!0);       // ?
// }

// {
//     // Q65: Nested typeof
//     let x16 = typeof typeof 123;
//     console.log(x16); // ?
// }

// {
//     // Q66: Pre-Increment inside condition
//     let val17 = 1;
//     if (++val17 == 2) console.log("Matched!"); // ?
// }

// {
//     // Q67: String to number using unary +
//     console.log(+"100px"); // ?
// }

// {
//     // Q68: Array with holes
//     let arr19 = [,,,];
//     console.log(arr19.length); // ?
// }

// {
//     // Q69: Comparing empty objects and arrays
//     console.log({} == {}); // ?
//     console.log([] == []); // ?
// }

// {
//     // Q70: Function hoisting
//     hoistMe(); // ?
//     function hoistMe() {
//         console.log("Hoisted");
//     }
// }

// {
//     // Q71: Function expression hoisting
//     try {
//         sayHi(); // ?
//     } catch (e) {
//         console.log("Error:", e.message);
//     }
//     let sayHi = function () {
//         console.log("Hi");
//     };
// }

// {
//     // Q72: Function declared inside block
//     {
//         function blockFunc() {
//             console.log("Inside block");
//         }
//     }
//     blockFunc(); // ?
// }

// {
//     // Q73: Default Parameters & Hoisting
//     function greet24(name = msg24) {
//         console.log(name);
//     }
//     var msg24 = "Hello";
//     greet24(); // ?
// }

// {
//     // Q74: typeof function declaration
//     function demo25() {}
//     console.log(typeof demo25); // ?
// }

// {
//     // Q75: Using delete on variable
//     let x26 = 10;
//     console.log(typeof "" + x26); // ?
// }

// {
//     // Q76: Using delete on object property
//     let user27 = { name: "Ankit" };
//     console.log(typeof true + user27.name); // ?
//     console.log(user27); // ?
// }

// {
//     // Q77: typeof NaN
//     console.log(typeof NaN); // ?
// }

// {
//     // Q78: Unary plus with booleans and null
//     console.log(+true);   // ?
//     console.log(+false);  // ?
//     console.log(+null);   // ?
// }

// {
//     // Q79: Weird coercion with arrays
//     console.log([] + 1);           // ?
//     console.log([1] + 1);          // ?
//     console.log([1, 2] + [3, 4]);  // ?
// }

// {
//     // Q80: What is the result of subtracting a string from a number?
//     let a = 10 - "2";
//     console.log(a); // ?
// }

// {
//     // Q81: What if we multiply null with a number?
//     let x = null * 5;
//     console.log(x); // ?
// }

// {
//     // Q82: Concatenate boolean and string – what will be the result?
//     let x = true + " is a value";
//     console.log(x); // ?
// }

// {
//     // Q83: Use typeof with array, null, and function
//     console.log(typeof [1, 2, 3]); // ?
//     console.log(typeof null);     // ?
//     console.log(typeof function() {}); // ?
// }

// {
//     // Q84: Compare different falsy values using ==
//     console.log(false == 0);   // ?
//     console.log(false == "");  // ?
//     console.log(null == false); // ?
// }

// {
//     // Q85: Use NaN in arithmetic
//     let x = NaN + 5;
//     console.log(x); // ?
// }

// {
//     // Q86: Use string and number in division
//     let x = "20" / 5;
//     console.log(x); // ?
// }

// {
//     // Q87: Division by zero
//     let x = 10 / 0;
//     console.log(x); // ?
// }

// {
//     // Q88: Check if typeof null is equal to object
//     let check = typeof null === "object";
//     console.log(check); // ?
// }

// {
//     // Q89: Implicit conversion in subtraction between string numbers
//     let x = "100" - "50";
//     console.log(x); // ?
// }

// {
//     // Q90: Bitwise NOT on a number
//     let a = 5;
//     console.log(~a); // ?
// }

// {
//     // Q91: What happens if we do ![] and !{} ?
//     console.log(![]);  // ?
//     console.log(!{});  // ?
// }

// {
//     // Q92: Convert string boolean to actual boolean using Boolean()
//     let val = "false";
//     console.log(Boolean(val)); // ?
// }

// {
//     // Q93: Check truthy/falsy using ternary operator
//     let data = "";
//     let result = data ? "Truthy" : "Falsy";
//     console.log(result); // ?
// }

// {
//     // Q94: Null + undefined
//     let x = null + undefined;
//     console.log(x); // ?
// }
// {
//     // Q95: String comparison with different cases
//     let str1 = "hello";
//     let str2 = "HELLO";
//     console.log(str1 == str2);       // ?
//     console.log(str1.toLowerCase() == str2.toLowerCase()); // ?
// }

// {
//     // Q96: Object reference comparison
//     let obj1 = { id: 1 };
//     let obj2 = { id: 1 };
//     let obj3 = obj1;
//     console.log(obj1 == obj2);  // ?
//     console.log(obj1 == obj3);  // ?
// }

// {
//     // Q97: Array reference comparison
//     let arr1 = [1, 2, 3];
//     let arr2 = [1, 2, 3];
//     let arr3 = arr1;
//     console.log(arr1 == arr2);  // ?
//     console.log(arr1 == arr3);  // ?
// }
// {
//     // Q98: Using delete on a variable
//     let x = 10;
//     console.log(delete x); // ?
//     console.log(x);        // ?
// }

// {
//     // Q99: Using delete on an object property
//     let user = { name: "Alice", age: 25 };
//     console.log(delete user.age); // ?
//     console.log(user);             // ?
// }

// {
//     // Q100: What is the result of typeof NaN?
//     console.log(typeof NaN); // ?
// }