// FS module, Async approach
const { readFile, writeFile } = require('fs');

// terminology:
// callback: runs when we are done, allows for async, prevents code blocking

console.log("Start")

readFile('./content/first.txt', "utf8", (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
        
    // console.log(result)

    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }

        const second = result;
        writeFile('./content/result-async.txt', 
        `Here is the result: ${first}, ${second}`, 
        (err, result) => {
            if (err) {
                console.log(err)
                return;
            }

            console.log("done with this task");
        })
    })
})

console.log("starting next task")