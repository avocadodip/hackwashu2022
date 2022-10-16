export const formatNum = (originalNum) => {
	// Converts amount to string
	let string = '' + originalNum
	// ex: 2
	if (!string.includes('.')) {
		return string + '.00';
	} 
	// ex: 2.5
	else if (string.charAt(string.length - 2) == '.') {
		return string + '0';
	} 
	// ex: 2.51
	else {
		return string;
	}
}