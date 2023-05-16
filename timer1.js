//Tests edge case if there was no number provided
if (process.argv.length === 2) {
  process.stdout.write("a valid argument was not provided \n")
} else {
  for (let i = 2; i < process.argv.length; i++) {
    //if a number is negative or the argument is not a number, that argument will be skipped
    if (process.argv[i] > 0 || typeof process.argv[i] == Number) {
      setTimeout(() => {
        process.stdout.write('your time is up \n')
      }, process.argv[i]*1000)
    }
  }  
}



