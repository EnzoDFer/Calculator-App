export const add = function(a,b) {
	return parseFloat(a)+parseFloat(b);
};

export const subtract = function(a,b) {
	return a-b;
};

export const divide = function(a,b) {
  return a/b;
}

export const sum = function(anArray) {
	return anArray.reduce((num,currentTotal)=>currentTotal+num);
};

export const multiply = function(a,b) {
  return a*b;
};

export const power = function(a,b) {
	return a**b;
};

export const factorial = function(num) {
	let result = 1;
  for (let i=num; i>0; i--) {
    result *= i;
  }
  return result;
};