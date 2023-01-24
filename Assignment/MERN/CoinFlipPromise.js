function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let attempts = 0;
        while (headsCount < 5 && attempts < 100) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped at attempt # ${attempts}`);
            if (result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }

            if (attempts > 100) {
                reject("The coin already had been tossed 100 times without any success")
            }
        }

        resolve(`It took ${attempts} attempts to get 5 heads in a row` );
    
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");
