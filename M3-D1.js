/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

function sum(a, b) {
    if (a === b) {
        let sum = a + b 
        return sum * 3
    } else {
        return a + b 
    }
}
// console.log(sum(2, 2))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

function myFunction(a, b) {
    return ((a === 50 || b === 50) || (a + b === 50))
}
// console.log(myFunction(25, 50))

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

function removeCharacter(string, position) {
    let array = string.split("")
    array.splice(position, 1)
    return array.join("")
}
// console.log(removeCharacter("kittycat", 5))

/*

4)
 Create a function to find the largest of three given integers.
*/

function findLargest(x, y, z) {
    return Math.max(x, y, z)
}
// console.log(findLargest(5, 2, 3))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

function rangeChecker(x, y) {
    if (x > 40 && x < 60) {
        if (y > 40 && y < 60) {
            return true
        }
    } else if (x > 70 && x <= 100) {
        if (y > 70 && y <= 100) {
            return true
        } 
    } else {
        return false
    }
}
// console.log(rangeChecker(41, 50))

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

function copyString(string, copies) {
    newString = ""
    for (let i = 0; i < copies; i++) {
        newString += string
        if (i !== copies - 1) {
            newString += " "
        }
    }
    return newString
}
// console.log(copyString("this", 5))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

function losOrNew(cityName) {
    if (cityName.startsWith("New") || cityName.startsWith("Los")) {
        return cityName
    } else {
        return ""
    }
}

// console.log(losOrNew("New York"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

function sum3(array) {
    return array[0] + array[1] + array[2]
}

// console.log(sum3([11, 2, 3]))

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

function testArray(array) {
    if (array.includes(1) || array.includes(3)) {
        return true
    } else {
        return false
    }
}
// console.log(testArray([5, 3]))

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/

function testArray2(array) {
    if (array.includes(1) || array.includes(3)) {
        return false 
    } else {
        return true
    }
}

/*
11)
Create a function to find the longest string from a given array of strings.
*/

function findLongestString(array) {
    let longestString = array.sort(
        function (a, b) {
            return b.length - a.length
        }
    )[0]

    return longestString    
}

// console.log(findLongestString(["this", "that", "the other one", "aaaaaaaaaaaaaaaaaa"]))

/*
12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    Obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
*/

function judgeAngle(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle"
    } else if (angle === 90) {
        return "Right angle"
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle"
    } else if (angle === 180) {
        return "Straight line"
    }
}

// console.log(judgeAngle(180))

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/

function greatestIndex(array) {
    largestNumber = Math.max(...array)
    return array.indexOf(largestNumber)
}

// console.log(greatestIndex([5, 3, 11]))

/*
14)
Create a function to get the largest even number from an array of integers.
*/

function largestEvenNumber(array) {
    let evenArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
        }
    }
    let largestEvenInt = Math.max(...evenArray)
    return largestEvenInt
}

// console.log(largestEvenNumber([15, 23, 32, 33, 11, 12, 6]))

// 16)
// Create a function to check from two given integers, whether one is positive and another one is negative.

function isEvenIsOdd(x, y) {
    string = ""
    if (x % 2 === 0) {
        string += "x is even."
    } else {
        string += "x is odd."
    }

    if (y % 2 === 0) {
        string += " y is even."
    } else {
        string += " y is odd."
    }
    return string
}

//console.log(isEvenIsOdd(2, 3))

// 17)

// Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 

// 18)

// Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

// 19)

// Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

// If the number has 3 as a factor, output 'Diego'.
// If the number has 5 as a factor, output 'Riccardo'.
// If the number has 7 as a factor, output 'Stefano'.
// If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
// Examples
// 28's factors are 1, 2, 4, 7, 14, 28.
// this would be a simple "Stefano".
// 30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
// this would be a "DiegoRiccardo".
// 34 has four factors: 1, 2, 17, and 34.
// this would be "34".

// 20)
// Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

// */
