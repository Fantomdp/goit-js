//'use strict';

// function isNumberInRange(start, end, number) {
//    const isInRange = (number>= start && number<=end) ; // Change this line
   
//    return isInRange;
//  }

// function isNumberInRangeRefactor(start, end, number) {
//    return (number>= start && number<=end) ; // Change this lin;
//  }


//  console.log(isNumberInRangeRefactor(10, 30, 17),"hello")
//  console.log(isNumberInRangeRefactor(10, 30, 5))
//  console.log(isNumberInRangeRefactor(20, 50, 24))
//  console.log(isNumberInRangeRefactor(20, 50, 76))

//  function checkPassword(password) {
//    const ADMIN_PASSWORD = "jqueryismyjam";
//    // Change code below this line
 
//  return (password === ADMIN_PASSWORD) ? "Welcome!" : "Access denied, wrong password!"
//    // Change code above this line
//  }
 

//  console.log(checkPassword("mangohackzor"));
//  console.log(checkPassword("polyhax"));
//  console.log(checkPassword("jqueryismyjam"));
// //*** 5/32 */
// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];  //"apple"
// const secondElement = fruits[1]; //"plum"
// const lastElement = fruits[fruits.length-1]; //"orange"


// //** 7/32 */
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const fruitsArrayLength = fruits.length; //4



// //*** 8/32 */
// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line
// const lastElementIndex = fruits.length - 1; //3
// const lastElement = fruits[lastElementIndex]; // "banana"



// //*** 9/32 */
// function getExtremeElements(array) {
//    // Change code below this line
 
//  return [array[0],array[array.length-1]]
//    // Change code above this line
//  }
//  getExtremeElements([1, 2, 3, 4, 5]) // [1, 5]
//  getExtremeElements(["Earth", "Mars", "Venus"]) // ["Earth", "Venus"]
//  getExtremeElements(["apple", "peach", "pear", "banana"]) // ["apple", "banana"]
 


// //*** 10/32
// function splitMessage(message, delimeter) {
//    let words;
//    // Change code below this line
//  words = message.split(delimeter)
//    // Change code above this line
//    return words;
//  }

//  splitMessage("Mango hurries to the train", " ") // ["Mango", "hurries", "to", "the", "train"]
//  splitMessage("Mango", "") // ["M", "a", "n", "g", "o"]
//  splitMessage("best_for_week", "_") // ["best", "for", "week"]


// //*** 11/32
// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// // console.log((message.match(/\ /g) || []).length);

// return (((message.match(/\ /g) || []).length)+1)*pricePerWord

//    // Change code above this line

//  calculateEngravingPrice("JavaScript is in my blood", 10) // 50
//  calculateEngravingPrice("JavaScript is in my blood", 20) // 100
//  calculateEngravingPrice("Web-development is creative work", 40) // 160
//  calculateEngravingPrice("Web-development is creative work", 20) // 80


// //*** 12/32
// function makeStringFromArray(array, delimeter) {
//    let string;
//    // Change code below this line
 
//     string = array.join(delimeter);
 
//    // Change code above this line
//    return string;
//  }
 
//  makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") // "Mango hurries to the train"
//  makeStringFromArray(["M", "a", "n", "g", "o"], "")) // "Mango"
//  makeStringFromArray(["top", "picks", "for", "you"], "_") // "top_picks_for_you"
 
//  ***

// function calculateEngravingPrice(message, pricePerWord) {
//    // Change code below this line
// console.log((message.match(/\ /g) || []).length); //підрахунок входжень символа " " в стрічку message
// console.log(message.split(" ").length)
// return (((message.match(/\ /g) || []).length)+1)*pricePerWord

//    // Change code above this line
// }


// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); //50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); //100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); //160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); //80

//*** */

// function slugify(title) {
//    // Change code below this line
//    let slug =(title.split(" "))
//    console.log(title.split(" ").join("-").toLowerCase())
//    console.log(title.toLowerCase().split(" ").join("-"), "2")

//    console.log(title.toLowerCase())
 
//    // Change code above this line
//  }
 
//  slugify("Arrays for begginers") // "arrays-for-begginers"
//  slugify("English for developer") // "english-for-developer"

// ***
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2) ;
// const nonExtremeEls = fruits.slice(1,fruits.length-1);
// const lastThreeEls = fruits.slice(-3);



// //*** 15/32 */
// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// // *** 16/32

// function makeArray(firstArray, secondArray, maxLength) {
//    // Change code below this line
//    //console.log(firstArray.lenght + secondArray.lenght)
   
//    // const newArray = firstArray.concat(secondArray)
//    // console.log(newArray.length< maxLength)
//    // console.log(newArray[0])
//    // console.log(newArray.lenght)

//    const newArray = firstArray.concat(secondArray);
 
//    if (newArray.length > maxLength)
//    {
//    return newArray.slice(0, maxLength);
//    }

//    return newArray;
//    // Change code above this line
//  }

// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3); // ["Mango", "Poly", "Ajax"]
// makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4); // ["Mango", "Poly", "Houston", "Ajax"
// makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3); // ["Mango", "Ajax", "Chelsea"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2); // ["Earth", "Jupiter"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0); // []

// // *** 17/32
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1 ) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }



// // *** 18/32
// function calculateTotalPrice(order) {
//    let total = 0;
//    // Change code below this line
//    for ( let i = 0; i < order.length; i += 1){
//      total = total + order[i];
//    }
//    // Change code above this line
//    console.log(total)
//    return total;
//  }
 
// calculateTotalPrice([12, 85, 37, 4]) // 138
// calculateTotalPrice([164, 48, 291]) // 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //1116


// // *** 19/36
// function findLongestWord(string) {
//   // Change code below this line
//   const newArray = string.split(" ")
//    //   console.table(newArray);
//    //   console.log(newArray.length);
//   let len = 0;
//   let word ;
//   for (let i=0; i<newArray.length; i += 1) {
//    //  console.log(newArray[i],newArray[i].length);
//     if (len < newArray[i].length) {
//       len = newArray[i].length;
//       word = newArray[i];
//       // console.log("вибираю", len);
//     }
//   }
//    //   console.log('Слово ', word);
//    return word
//   // Change code above this line
//  }

// findLongestWord("The quick brown fox jumped over the lazy dog") // jumped
// findLongestWord("Google do a roll") // Google
// findLongestWord("May the force be with you") // force


// // *** 20/32
// function createArrayOfNumbers(min, max) {
//    const numbers = [];
//    // Change code below this line
//    for (let i = 0; i < max - min + 1; i += 1){
//       let newNumber = min + i;
//       numbers.push(newNumber);
//    }
//    // Change code above this line
//    console.log('end',numbers)
//    return numbers;
//  }
 
// createArrayOfNumbers(1, 3) // [1, 2, 3]
// createArrayOfNumbers(14, 17) // [14, 15, 16, 17]
// createArrayOfNumbers(29, 34) // [29, 30, 31, 32, 33, 34]

// // *** 21/32
// function filterArray(numbers, value) {
//    // Change code below this line
//    let newNumbers = [];
//    for ( let i = 0; i < numbers.length + 1; i += 1) {
//       if (numbers[i] > value) {
//          newNumbers.push(numbers[i]);
//       }
//    }
//    // console.log(newNumbers);
//    return newNumbers
//   // Change code above this line
// }

// filterArray([1, 2, 3, 4, 5], 3) //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) //повертає [5]
// filterArray([1, 2, 3, 4, 5], 5) //повертає []
// filterArray([12, 24, 8, 41, 76], 38) //повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) //повертає [24, 41, 76]


// // *** 22/32
// function checkFruit(fruit) {
//    const fruits = ["apple", "plum", "pear", "orange"];
//       console.log(fruits.includes(fruit));
//    return fruits.includes(fruit); // Change this line
//  }
 

// checkFruit("plum") // повертає true
// checkFruit("mandarin") //повертає false
// checkFruit("pear") //повертає true
// checkFruit("Pear") //повертає false
// checkFruit("apple") //повертає true

// // ***23/32
// function getCommonElements(array1, array2) {
//    // Change code below this line
//    let newArray = [];
//    for (let i = 0; i < array1.length; i += 1){
//       for (let y = 0; y < array2.length; y += 1){
//          if (array1[i] === array2[y]){
//             newArray.push(array1[i])
//          }
//       }
      
//    }
//    console.log(newArray)
//    return newArray
//   // Change code above this line
//  }

// getCommonElements([1, 2, 3], [2, 4]) //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) //повертає []
// right answer
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив

// right answer
// В циклі 'for' використовувалися методи 'includes' і 'push'

// function getCommonElements(array1, array2) {
//    // Change code below this line
//    let newArray = [];
//    for (let i = 0; i < array1.length; i += 1){
//          if (array2.includes(array1[i])){
//             newArray.push(array1[i]);
//          }
//    }
//    console.log(newArray)
//    return newArray
//   // Change code above this line
//  }

// getCommonElements([1, 2, 3], [2, 4]) //повертає [2]
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) //повертає [1, 2]
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) //повертає [12, 27, 3]
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) //повертає [10, 30, 40]
// getCommonElements([1, 2, 3], [10, 20, 30]) //повертає []



// // *** 24/32
// function calculateTotalPrice(order) {
//     let total = 0;
//    // // Change code below this line
 
//    // for (let i = 0; i < order.length; i += 1) {
//    //   total += order[i];
//    // }
//    for (const x of order){
//       total += x;
//    }
//    // Change code above this line
//    console.log(total)
//    return total;
//  }
 
// calculateTotalPrice([12, 85, 37, 4]) //повертає 138
// calculateTotalPrice([164, 48, 291]) //повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]) //повертає 1116
// calculateTotalPrice([]) // 0



// // *** 25/32
// function filterArray(numbers, value) {
//    // Change code below this line
//    const filteredNumbers = [];
 
//    // for (let i = 0; i < numbers.length; i += 1) {
//    //   const number = numbers[i];
//    for (const number of numbers) {
//      if (number > value) {
//        filteredNumbers.push(number);
//      }
//    }
//    console.log(filteredNumbers)
//    return filteredNumbers;
//    // Change code above this line
//  }
 
// filterArray([1, 2, 3, 4, 5], 3) //повертає [4, 5]
// filterArray([1, 2, 3, 4, 5], 4) // повертає [5]
// filterArray([1, 2, 3, 4, 5], 5) //повертає []
// filterArray([12, 24, 8, 41, 76], 38) //повертає [41, 76]
// filterArray([12, 24, 8, 41, 76], 20) //повертає [24, 41, 76]



// // *** 27/32
// // function getEvenNumbers(start, end){
// //    const array = [];
// //    while (start < end) {
// //
// //       if (start % 2 === 0) {
// //       } else {
// //          start += 1;
// //       }
// //       array.push(start);
// //       start += 2;
// //    }
// //    console.log(array);
// //    return array;
// //     // Change code above this line
// //   }

// function getEvenNumbers(start, end){
//    const array = [];
//    if (start % 2 != 0) {
//       start += 1
//    }
//    for (let i = start; i <= end; i += 2){
//       array.push(i);
//    }
//    console.table(array);
//    return array;
//     // Change code above this line
// }
  
// getEvenNumbers(2, 5) //повертає [2, 4]
// getEvenNumbers(3, 11) //повертає [4, 6, 8, 10]
// getEvenNumbers(6, 12) //повертає [6, 8, 10, 12]
// getEvenNumbers(8, 8) //повертає [8]
// getEvenNumbers(7, 7) //повертає []
// getEvenNumbers(3, 3) //повертає []


// // ** 30/32
// function includes(array, value) {
//   // Change code below this line
//   for (let i = 0; i < array.length; i += 1){
//      if (array[i] === value) {
//         console.log('true')
//         return true;
//    }
//    }
//    console.log('false')
//    return false;
//   // Change code above this line
// }

// includes([1, 2, 3, 4, 5], 3) // повертає true
// includes([1, 2, 3, 4, 5], 17) // повертає false
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") // повертає true
// includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") // повертає false
// includes(["apple", "plum", "pear", "orange"], "plum") // повертає true
// includes(["apple", "plum", "pear", "orange"], "kiwi") // повертає false


// *** 32/32
// function calculateTotal(number) {
//    // Change code below this line
//    let num = 0
//    for (let i = 0; i <= number; i += 1) {
//       num += i;
//    }
//    return num
//   // Change code above this line
// }

// Mate //
// // В Mate bank є можливість покласти гроші на депозит під певний відсоток і отримати прибуток через деякий час.

// // Наприклад, якщо покласти 10000 на 3 роки під 4% річних, отримаємо:

// // перший рік: 10000 + 4% = 10400 (10000 + 10000 * 0.04);
// // другий рік: 10400 + 4% = 10816 (10400 + 10400 * 0.04);
// // третій рік: 10816 + 4% = 11248.64 (10816 + 10816 * 0.04);
// // чистий прибуток: 11248.64 - 10000 = 1248.64.


// function calculateProfit(amount, percent, period) {
//   // write code here
//     let total = amount;
//     for (let i = 0; i < period; i++){
//         total += total * percent / 100;
//     }
//   return total-amount
// }
// calculateProfit(1000, 5, 1); // 50
// calculateProfit(12500, 3, 12); // 5322


// const word = "abcdef";
// const part = 'bs';
// console.log(
//     word.includes(part),
//     word.indexOf(part),
//     word.lastIndexOf(part),
//     word.startsWith(part),
//     word.endsWith(part)
// );

// // ***
// const model = "Apple iPhone 13";
// const search = 'iph';

// const condition = model.toLowerCase().includes(search.toLowerCase());

// if (condition) {
//     console.log('Found');
// }

// // ***
// const message = '0123456789';

// console.log(
//     message.substr(3, 5),       //34567
//     message.substring(3, 5),    //34
//     message.slice(3, 5)          //34
// );

// const result = message.slice(1, -1);
// console.log(
//     result
// )


// // *** number to string
// const x = 12345;

// console.log(
//     String(x),
//     x.toString(),
//     '' + x,
//     `${x}`
// )

// const fruit = 'apple';
// console.log(fruit[5]);


// let text = 'Hello world, welcome to the universe.';
// let result = text.indexOf('welcome');
// console.log(
//     result
// )

// //***  В JavaScript можна перевірити, чи є символ літерою чи ні.*/
// function isLetter(ch) {
//   return ch.toLowerCase() !== ch.toUpperCase();
//}


//const str = 'The quick brown fox jumps over the lazy dog.';
//console.log(str.slice(4, 10));


// //*** */
// function isSubstring(phrase, part) {
//     // write code here
//     console.log('ss',
//         phrase.includes(part)
//     );
//     return phrase.includes(part)
// }
// isSubstring('string', 's'); // true
// isSubstring('string', 'ring'); // true
// isSubstring('string', 'bring'); // false
// isSubstring('string', 'Str'); // false, бо 'str' і 'Str'



// // *** приймає рядок text та повертає кількість літер m у ньому (як великих, так і маленьких).
// function countMs(text) {
//   // write code here
//   let count = 0
//     for (const i of text) {
//         if (i === 'm' || i === 'M') {
//       count++
//       }
//   }
//     console.log(count)
//     return count
// }
// countMs('document'); // 1
// countMs('Mermaid'); // 2 — потрібно рахувати і 'm', і 'M'
// countMs('code'); // 0



// //*** */
// function removeVowels(doc) {
//     let result = ''
//     // for (let i of doc) {
//     //     if (i != 'a' && i != 'e' && i != 'i' && i != 'o' && i != 'u' && i != 'y' && i != 'A' && i != 'E' && i !='I' && i !='O' && i !='U' && i !='Y') {
//     //       result += i
//     //     }
//     // }
// 	for (const char of doc) {
// 		if (!'aeiouy'.includes(char.toLowerCase())) {
// 		result += char
// 	}
// }
    
// 	return result;
// }

// removeVowels('document'); // 'dcmnt'
// removeVowels('I like my boss'); // ' lk m bss'
// removeVowels('350 euro'); // '350 r'

//***У цьому завданні створи функцію makeAbbr, яка приймає рядок зі слів words та повертає абревіатуру з них у верхньому регістрі.
//Рядок words містить одне або декілька слів, розділених одним пробілом. */

function makeAbbr(words) {
  // write code here
	let result = words.slice(0, 1);
  
	for (let i = 1; i < words.length; i++){
		const char = words.substr(i, 1)
		if (char === " ") {
			i++;
			result += words.substr(i, 1);
		}
	}
	console.log(result.toUpperCase());
	return result.toUpperCase();
}

// 'NASA'
makeAbbr('national aeronautics space administration');
// 'CPU'
makeAbbr('central processing unit');
// 'SMILES'
makeAbbr('simplified molecular input line entry specification');

