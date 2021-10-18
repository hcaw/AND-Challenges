const asciiNums = [
	[" _ ", "| |", "|_|"], [" ", "|", "|"],
	[" _ ", " _|", "|_ "], [" _ ", " _|", " _|"],
	["   ", "|_|", "  |"], [" _ ", "|_ ", " _|"],
	[" _ ", "|_ ", "|_|"], [" _ ", "  |", "  |"],
	[" _ ", "|_|", "|_|"], [" _ ", "|_|", " _|"],
]
const run = (input: number = 123456789) => {
	const numbers = input.toString().split("").map(char => parseInt(char))
	const twoDArray = numbers.map(num => asciiNums[num])
	const outputString = twoDArray.reduce((prev, curr) => [ prev[0] + curr[0], prev[1] + curr[1], prev[2] + curr[2] ], ["", "", ""])
	return outputString.reduce((prev, curr, i) => {
		return `${prev}${i === 0 ? "" : "\n"}${curr}`
	}, "")
}

const challengeInput = process.argv[2] ? parseInt(process.argv[2]) : undefined
const output = run(challengeInput)
console.log(output)