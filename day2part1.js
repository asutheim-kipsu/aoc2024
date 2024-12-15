

function retrieveData() {
    const rawValues = document.querySelector('pre').innerText;
    // split the raw values down by line into strings for each report
    const bigString = rawValues.split('\n');
    //map over report string, split the numbers by spaces, trim any trailing space, and convert each to a number
    const reports = bigString.map((string=> string.split(/\s+/).map(Number)));
    
    // console.log("reports:", reports)
    return reports
}


let reports = retrieveData();

function determineSafety() {


    let safeReports = 0;

    reports.forEach(report => {

        const differences = [];
        
        for (let i = 0; i<report.length -1; i++) {
        //stores the difference between each value and its neighbor in the array 'differences'
            differences.push(report[i+1]-report[i]);
        }
        
        //checks to see if all differences are increasing or decreasing   
        const allIncreaseOrAllDecrease = differences.every(diff=> diff>0) || differences.every(diff=>diff<0);

        //checks to see that no values are the same
        const noStasis = differences.every(diff => diff!==0);
          
        //checks that all values are between -3 and 3
        const safeRange = differences.every(diff => diff>=-3 && diff<=3);
     
     //increments count of safe report, if all conditions are met   
     if (allIncreaseOrAllDecrease && noStasis && safeRange) {
        safeReports++
        console.log("Report:", report)
        console.log("Differences:", differences)
     };   
}
)
return safeReports;
}

let safeReports = determineSafety();

console.log("Total Number of safe reports:", safeReports);