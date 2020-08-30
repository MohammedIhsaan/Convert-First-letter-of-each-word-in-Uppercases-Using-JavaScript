var str = document.getElementById("string").innerHTML;
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


////////////////**********USING  CSS PROPERTY*************////////////////////
var sr = document.getElementById("string");
sr.style.textTransform = "capitalize";
///////// Output : Convert Each First Letter Of Word In Uppercase Using JAVASCRIPT.
//////// but in this case irreguler string not converted.see above last word is not converted


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
