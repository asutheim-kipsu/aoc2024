// Solution for Day 1 of Advent of Code 2024


function retrieveLists() {
    // Retrieve the raw values from the page and format them into an array
    const rawValues = document.querySelector('pre').innerText
        .trim()
        .split(/\s+/);  // Split by whitespace (spaces, tabs, newlines)

    let list1 = [];
    let list2 = [];    

    // Split the values into two arrays based on their position in the rawValues array
    rawValues.forEach((value, index) => {
     
        const number = parseInt(value, 10);

        if (!isNaN(number)) {
            if (index % 2 === 0) {
                list1.push(number);  
            } else {
                list2.push(number);  
            }
        }
    });

    return { list1, list2 }; 
}

//Calls the function and makes the values of list1 and list2 available for the subsequent comparison function 
const {list1, list2} = retrieveLists();

function compareLists(list1, list2) {


// checks to make sure there will be values to compare at each index number
    if (list1.length !== list2.length) {
        console.log("Invalid inputs, arrays are of different lenghts");
        return;
    }


//sorts list in ascending order

list1.sort((a, b) => a - b);
list2.sort((a, b) => a - b);

//returns the absolute value of each pair to an array

    let valuesToAdd = [];
    for (let i = 0; i < list1.length; i++) {
        let result = Math.abs(list1[i] - list2 [i]); 
        valuesToAdd.push(result);

       
    }

    return addValues(valuesToAdd);

//sums all the values in the array
    function addValues(valuesToAdd) {
        let sum = 0
        for (let i = 0; i < list1.length; i++) {
            sum += valuesToAdd[i]
        }
        return sum 
    
    
    }

}

const finalAnswer = compareLists(list1, list2);
console.log('Final Answer:', finalAnswer);