const asciiNums = [
	[" _ ", "| |", "|_|"],
	[" ", "|", "|"],
	[" _ ", " _|", "|_ "],
	[" _ ", " _|", " _|"],
	["   ", "|_|", "  |"],
	[" _ ", "|_ ", " _|"],
	[" _ ", "|_ ", "|_|"],
	[" _ ", "  |", "  |"],
	[" _ ", "|_|", "|_|"],
	[" _ ", "|_|", " _|"],
]

const run = (input: number) => {
	// Split input into an array of numbers
	const numbers = input.toString().split("").map(char => parseInt(char))
	// Iteratively create a 2-dimensional array containing the numbers
	const twoDArray = numbers.map(num => asciiNums[num])
	// Transform the 2D array into a string
	const outputString = twoDArray.reduce((prev, curr) =>
		[
			prev[0] + curr[0],
			prev[1] + curr[1],
			prev[2] + curr[2]
		]
		, ["", "", ""])
	return outputString.reduce((prev, curr, i) => {
		const newline = i === 0 ? "" : "\n"
		return `${prev}${newline}${curr}`
	}, "")
}

const _input = 123456789
const output = run(_input)
console.log(output)
