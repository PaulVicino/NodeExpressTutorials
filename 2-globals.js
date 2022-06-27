// global variables

// __dirname: path to current directory
// __filename: file name
// require: function to use modules (commonJS)
// module: info about current module (file)
// process: info about env where the file is being executed

console.log(__dirname)
console.log(__filename)

// repeats code every X ms
setInterval(() => {
    console.log("hello world")
}, 1000)