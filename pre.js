/* Recursion section
*/
sumDigits = n => {
  if (n==0) return 0;
  if (n==1) return 1;
  return sumDigits(parseInt(n/10)) + n%10;
}

// loop
sumDigits2 = n => {
  sum = 0;
  do  {
    sum += n%10;
    n = parseInt(n/10)
  } while (n >= 10)
  return sum + n;
}

pow = (b, e) => {
  if (e == 0) return 1;
  if (e == 1) return b;
  if (e < 0) return 1 / pow(b, -e);
  return b * pow(b, e-1);
}

factorial = n => {
  if (n==1 || n==0) return 1;
  //if (n==2) return 2;
  return n * factorial(n-1);

}

/**
  Prime number has factors that is 1 and itself. Ex, 4 is not a prime number
  since its factors are 1, 2, 4
*/
//function generatePrime(n) {
  //const primes = [];
    // const isPrime = [false, false].concat(Array(n - 1).fill(true));
    // console.log("isPrime here: ", isPrime)
    // for (let i = 2; i < n; i++) {
    //     if (isPrime[i]) {
    //         primes.push(i);
    //         for (let j = i; j <= n; j += i) {
    //             isPrime[j] = false;
    //         }
    //    }
  //console.log("Isprime after: ", isPrime);
  //return primes;
//}
isPrime = n => {
    for (let i = 2; i < n; i++) {
      if (n % i == 0) return false;
    }
    return true;
}

genPrime = n => {
  // know 2 is a prime number already
  var p = [2];
  // even number is not a prim so just check odd number
  for (let i = 3; i < n; i+=2) {
    if (isPrime(i)) p.push(i);
  }
  return p;
}

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34: current number = sum of two previous number
fibonacci = n => {
  if (n==0) return 0;
  if (n==1 || n==2) return 1;
  return fibonacci(n-2) + fibonacci(n-1);
}

var tryClosureOutter = function (outterparm) {
 	 var tryClosureInner = function (innterparm) {
     	return "Your innter parm: " + innterparm + ", your outterparm: " + outterparm;
     }
     return tryClosureInner;
}

// merge 2 arrays
mergeArray = (a, b) => {
  var c = [];
  var lena = a.length;
  var lenb = b.length;
  var i = 0, j = 0;

  while (i < lena &&  j < lenb) {
    if (a[i] < b[j]) c.push(a[i++]);
    else c.push(b[j++]);
  }
  while (i<lena) c.push(a[i++]);
  while (j<lenb) c.push(b[j++]);

  return c;
}

// Remove duplicate VALUES
removeDup = (arr) => {

  let r = [];
  let len = arr.length;
  let t;

  // solution 1 brute force
  // for (let i = 0; i < len; i++) {
  //   if (r.indexOf(arr[i]) == -1)
  //     r.push(arr[i]);
  // }

  // for (let i = 0; i < len; i++) {
  //   if (arr[i] != t) {
  //     r.push(arr[i])
  //     t = arr[i];
  //   }
  // }
  // return r;

  // using objects
  // let obj = {};
  //
  // for (let v of arr) {
  //   obj[v] = true;      // keys are alway unique
  // }
  // //console.log(obj);
  // return Object.keys(obj);

  // ES2015/ES6 set
  // return [...new Set(arr)];  // Set only store unique value ...copy array
}

printMinMax = (a) => {
  let min = a[0];
  let max = a[0];

  for (let i = 1; i < a.length; i++) {
    if (min > a[i]) min = a[i];
    if (max < a[i]) max = a[i];
  }

  console.log ("Min: ", min);
  console.log ("MAX: ", max);
}

checkPalindrome = (a) => {
  // var start = 0;
  // var end = a.length - 1;
  // while (start < end) {
  //   if (a[start] != a[end]) return 0;
  //   start++;
  //   end--
  // }
  // return 1;
  // javascript 1 line solution
  return a.split('').reverse().join('') === a;
}

// hello world => world hello
reverseWords = (txt) => {
    return txt.split(' ').reverse().join(' ');
}

// hello world => helo word
var removeDupChar = (str) => {
  var r = str.split("");
  return [...new Set(r)].join("");
}

// abcd => dcba
var reverseStr = (str) => {
  var r = "";
  // solution1: for loop going backward
  for (let i = str.length-1; i >= 0; i--) {
    r += str[i]
  }
  return r;
  // solution2 with 3 built-in function
  //return str.split("").reverse().join("");
}

var binSearch = (arr, value) => {
  var p, l, h;
  l = 0;
  h = arr.length - 1;
  while (l <= h ) {
    p = Math.floor((l + h) / 2);
    if (arr[p] == value)
      return p;
    else if (arr[p] > value) // value in first half
      h = p - 1;
    else                     // value in second half
      l = p + 1;
  }
  return -1; // no found
}

var sortArray = (arr) => {
  return arr.sort(i,j => i - j)
}

// String compress: aabcccccaaa would become a2blc5a3
var compressStr = (str) => {
  var checking = str[0], c = 1, compress = "";
  for (let i = 1; i <= str.length; i++) {
    if (str[i] == checking) c++;
    else {
      compress += checking + c;
      c = 1;
      checking = str[i];
    }
  }
  return compress;
}

// Replace a pattern in string with Plus(or any other characater)
// plusOut("12xy34", "xy") → "++xy++"
// plusOut("12xy34", "1") → "1+++++"
// plusOut("12xy34xyabcxy", "xy") → "++xy++xy+++xy"

var replaceWithChar = (str, pat, ch) => {
    var t = str.split(pat);
    var r = [];

    for (let i = 0; i < t.length; i++) {
      r.push(t[i].replace(/[a-zA-Z0-9]/g, ch));
    }

    return r.join(pat);
}

getEvenAndSort = (arr) => {
  return arr.filter(i => i % 2 == 0).sort((i,j) => i - j);
}

findMissingNum = (arr) => {
    var s = arr.sort((i,j) => i - j);
    console.log(s);

    for (let k = 1; k <= arr.length; k++) {
        if (s.indexOf(s[k]) == -1) {
            return k;    // get missing number
        }
    }
    return -1; // no missing number
}

function adjacentElementsProduct(arr) {
    // var max = inputArray[0] * inputArray[1];
    // for (var i = 1; i < inputArray.length - 1; i++) {
    //     var t = inputArray[i] * inputArray[i+1];
    //     if (t > max)  max = t;
    // }
    // return max;
    // console.log(...arr.slice(1).map((x,i)=>{console.log(x + " " + i); return [x*arr[i]]}))
    return Math.max(...arr.slice(1).map((x,i)=>[x*arr[i]]))
}

maxSwap = n => {
  var narr = n.toString().split('');
  console.log(Math.max(...narr));
  var imax = narr.indexOf(Math.max(...narr).toString());
  if (imax > 0) {
    var t = narr[0];
    narr[0] = narr[imax];
    narr[imax] = t;
    return parseInt(narr.join(''));
  }
  return n;
}

//console.log(maxSwap(9912));
var obj = [{first: 'Vien', last: 'Nguyen'},
           {first: 'Tom', last: 'Beavin'},
           {first: 'Martin', last: 'Dinh'}];

var a1 = [1, 5, 8, 10, 15, 16];
var a2 = [2, 4, 6, 7, 7, 9, 9, 12, 13, 17];

console.log(replaceWithChar("12xy34xyabcxy", "xy", '*'));
//console.log(compressStr("aabcccccaaa"));
//remove duplicate values
// console.log(removeDup(a2));
// interview quesion
//const arr = [10, 12, 15, 21];
//console.log(reverseWords("Nguyen Van Vien"));
//printMinMax(a2);
//console.log(checkPalindrome("deedw"));
// for (var i = 0; i < arr.length; i++) {
//   // pass in the variable i so that each function
//   // has access to the correct index
//   setTimeout(function(i_local) {
//     return function() {
//       console.log('The index of this number is: ' + i_local);
//     }
//   }(i), 3000);
// }
// powerful concat
//var c = a1.concat(1).sort((x,y) => x-y);
//console.log(mergeArray(a1,a2));

//console.log(obj.sort((i,j) => i.last < j.last));
// outputs
// console.log(genPrime(35));
// console.log(pow(2,5));
 //console.log(factorial(6));
// console.log(sumDigits(1235)); // 11
// console.log(sumDigits2(1235)); // 11
// console.log(fibonacci(6));
/* use split to count occurence of a char or string */
//  console.log("Vien Nguyen".split("n").length-1);
//var s = 'hello world!';
//console.log(global.s);
// for (var i=0; i<10; i++) {
//   setTimeout((function(i) {
//     console.log(i);
//   })(i),10)
// }
