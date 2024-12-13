

// start boilerplate to get inital data arrays
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

const {list1, list2} = retrieveLists();

// end boilerplate


let similarityValues = [];

function findSimilarityValues (){

for (let i = 0; i<list1.length; i++) {

    let multiplier = 0;
    let thisSimilarityValue = 0;
  
    //loop through list2, comparing each value to the value of list1[i]
    for (let j = 0; j<list2.length; j++) {
        if (list1[i] === list2[j]) {
            multiplier++;
        }
    }  

    //After checking all of list2, multiply the value of list1[i] by the number of matches
    thisSimilarityValue = list1[i] * multiplier
    //Store the result 
    similarityValues.push(thisSimilarityValue)

    console.log(`list1[${i}] = ${list1[i]}, multiplier = ${multiplier}, similarity value = ${thisSimilarityValue}`);
}
}

findSimilarityValues();


//Add all the similarity scores
function calculateTotalSimilarity(){
    let totalSimilarity = 0;
   
    for (let i=0; i<similarityValues.length; i++) {
        totalSimilarity += similarityValues[i];
    }
   return totalSimilarity; 
}

let totalSimilarity = calculateTotalSimilarity();

console.log("The total similarity score is:", totalSimilarity);