

//runs all the text on the page through a regex,
// which looks for two integers separated by a comma within closed parentheses
function retrieveData() {
    const rawValues = document.querySelector('pre').innerText;
    const regex = /mul\((\d+),(\d+)\)/g;
    let validPairs = [...rawValues.matchAll(regex)]; 
    console.log("valid pairs:", validPairs);
    return validPairs;
}


//extracts the integers from the strings, multiplies them, and pushes the product to an array
function multiplyPairs(validPairs) {
    let results = [];
 
    validPairs.forEach(integer => {
        const firstInteger = parseInt(integer[1]);
        const secondInteger = parseInt(integer[2]);
         
        const result = firstInteger * secondInteger;
        results.push(result)
    })
    console.log("Multiplication results:", results);
    return results;
}

//adds the results of all the products
function addResults(results) {
    let finalSum= 0;
    results.forEach(result => {
        finalSum += result;
})
    return finalSum;
} 

//order the above functions to execute in sequence
function executeAll () {
    let validPairs = retrieveData();
    let results = multiplyPairs(validPairs);
    let finalSum = addResults(results);
    console.log("Final sum:", finalSum);
}

executeAll(); 


