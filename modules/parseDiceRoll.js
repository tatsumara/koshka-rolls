module.exports = (input) => {
		// Remove spaces from the input.
		input = input.replace(/\s/g, '');
  
		// Define a regular expression pattern to match the format "2d6+1" or "10d12-5".
		const regex = /^(\d+)d(\d+)([+\-]\d+)?$/;
	  
		// Use the regex pattern to match the input string.
		const match = input.match(regex);
	  
		if (match) {
		  // Extract the matched values and convert them to numbers.
		  const amount = parseInt(match[1]);
		  const sides = parseInt(match[2]);
		  
		  // Extract the bonus part and convert it to a number.
		  const bonusMatch = match[3];
		  const bonus = bonusMatch ? parseInt(bonusMatch) : 0;
	  
		  // Return an object with the parsed values.
		  return { amount, sides, bonus };
		} else {
		  // Return null if the input doesn't match the expected format.
		  return null;
		}
}