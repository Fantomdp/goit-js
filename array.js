// const arr = ['Jazz', 'Blues'];

// const first = arr.push('RNR');

// console.log(arr)
// console.log('value',first)
// const employers = ['Dennis', 'Watkins', 'Shaw', 'Ray'];

// const idx = employers.indexOf('Shaw');
// employers.splice(idx,1) // вирізаємо Shaw
// console.log(employers)


// const idx = employers.indexOf('Watkins');
// // employers.splice,(idx,0, 'Jon') // вирізаємо Watkins
// // console.log(employers)

// const calcBMI = function(weight,height){
//    weight = Number(weight.replace(',','.'))
//    height = Number(height.replace(',','.'))

//    //const bmi = weight/ Math.pow(height,2)
//    const bmi = weight/ height ** 2
//    const response = bmi.toFixed(1);

//    return response
// }

// const userBMI = calcBMI('88,3','1,75')
// console.log(userBMI)


// const getRectArea = function (dimension){
//    const arr = dimension.split(' ');
//    const value1 = Number(arr[0]);
//    const value2 = Number(arr[1]);
//    return value1 * value2

// };

// console.log(getRectArea('8 11')) //88
// console.log(getRectArea('18 11')) //198
// console.log(getRectArea('8 21')) //168



// const valcAverage = function() {
//    let total = 0;
//    // const arr = Array.from(arguments);
//    // arr.splice(0,1);
//    // console.log(arr);
//    for (const argument of arguments){
//       total += argument;
//       console.log(argument);
//    }
//    console.log(total/arguments.length);
//    return total/arguments.length;
// };

// //const valcAverage = function() {
// console.log(valcAverage(1, 2, 3, 4))
// console.log(valcAverage(1, 2, 3))
// console.log(valcAverage(1, 2))
// console.log(valcAverage(1))


// function logItems(arr) {
//    for (let i = 0; i<arr.length; i+=1){
//       console.log(`${i+1}-${arr[i]}`)
//    }
// }

// logItems(['1','2','3','4'])


// function printContactInfo(names,phones){
//    names = names.split(',');
//    phones = phones.split(',');
//    for (let i=0; i< names.length; i +=1){
//       console.log(`${names[i]} - ${phones[i]}`)
//    }
// }

// printContactInfo('tel1,tel2,tel3','111111,222222,333333')