var str = "convert each first letter of word in uppercase using JAVASCRIPT.";
var splitStr = str.toLowerCase().split(/\s+/);
console.log(splitStr);

////////////////**********USING FOR LOOP*************////////////////////
var finalResultStr = "";
for (let i = 0; i < splitStr.length; i++) {
  var subStr = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  finalResultStr += subStr + " ";
}
console.log(finalResultStr);
///////// Output : Convert Each First Letter Of Word In Uppercase Using Javascript.

////////////////**********USING  MAP*************////////////////////
var strArray = splitStr.map((subString) => {
  return subString.charAt(0).toUpperCase() + subString.slice(1);
});
console.log(strArray);
var arrayToString = strArray.toString();
console.log(arrayToString);
var finalResult = arrayToString.replace(/,/g, " ");
console.log(finalResult);
///////// Output : Convert Each First Letter Of Word In Uppercase Using Javascript.

////////////////**********USING  RegExp*************////////////////////

var finalStr = str.replace(
  /(^\w|\s+\w)(\S*)/g,
  (_, p1, p2) => p1.toUpperCase() + p2.toLowerCase()
);
console.log(finalStr);
///////// Output : Convert Each First Letter Of Word In Uppercase Using Javascript.
