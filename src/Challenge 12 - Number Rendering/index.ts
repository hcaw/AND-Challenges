// Input: 1234567890
// Output:
//   _  _     _  _  _  _  _  _ 
// | _| _||_||_ |_   ||_||_|| |
// ||_  _|  | _||_|  ||_| _||_|
const asciiNums = {
	"0": [" _ ", "| |", "|_|"],
	"1": [" ", "|", "|"],
	"2": [" _ ", " _|", "|_ "],
	"3": [" _ ", " _|", " _|"],
	"4": ["   ", "|_|", "  |"],
	"5": [" _ ", "|_ ", " _|"],
	"6": [" _ ", "|_ ", "|_|"],
	"7": [" _ ", "  |", "  |"],
	"8": [" _ ", "|_|", "|_|"],
	"9": [" _ ", "|_|", " _|"],
}

const run = (input: number) => {
	// Split input into an array of numbers
	const numbers = input.toString().split("").map(char => parseInt(char))
	// Iteratively create a 2-dimensional array containing the numbers
	const twoDArray = numbers.map(num => asciiNums[num.toString()])
	// Transform the 2D array into a string
	return twoDArray
}

const _input = 123456789
const output = run(_input)
console.log(output)
