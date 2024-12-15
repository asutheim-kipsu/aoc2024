//function to separate incoming data into an array of arrays, each sub-array being one line
//initialize a value safeReports = 0
//loop through each sub-array in the array 
//for each sub-array, loop through each digit 
            // initalize array differences = []
            // find the difference between each object[i] and object[i+1], store in [differences]
            // loop through differences 
                    // differences.array.every.math.sign = -1 or 1, continue, else return
                    // differences.array.every != 0, continue, else return
                    // differences.array.every <=3 OR >=-3, safeReports = ++


function retrieveData() {
    const rawValues = document.querySelector('pre').innerText;
    // split the raw values down by line into strings for each report
    const reports = rawValues.split('\n');
    //map over each report, split the numbers by spaces, trim any trailing space, and convert each to a number
    const data = reports.map((report=> report.split('').trim().map(Number)));
    console.log("Data:", data);
}