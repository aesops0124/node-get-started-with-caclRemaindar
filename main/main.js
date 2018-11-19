// Write your cade below:
function caclRemaindar(a,b) {return a%b};

function caclSum(numArray1) {

let sum=0;
var arrayLength = numArray1.length;
for (var i = 0; i < arrayLength; i++) {
    sum+=numArray1[i];
    //Do something
}
return sum
};

function caclSumInConditon(numArray1 , num) {

let sum=0;
var arrayLength = numArray1.length;
for (var i = 0; i < arrayLength; i++) {
	if(numArray1[i] < num) {
    	sum+=numArray1[i];
	}
    //Do something
}
return sum
};


module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}