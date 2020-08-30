# Convert-First-letter-of-each-word-in-Uppercases-Using-JavaScript
Convert First letter of each word in Uppercases Using JavaScript

## Getting Started

These instructions will get you make first letter of each word in Uppercases Using JavaScript.
let say you have this following 

```
<p id="string">
      convert each first letter of word in uppercase using JAVASCRIPT
    </p>
```
and you want to Convert First letter of each word in Uppercases Using JavaScript. There are sevral method by which you can do this. Some method are as follows 




### Using For Loop Method

```
var str = document.getElementById("string").innerHTML;
var splitStr = str.toLowerCase().split(/\s+/);
var finalResultStr = "";
for (let i = 0; i < splitStr.length; i++) {
  var subStr = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
  finalResultStr += subStr + " ";
}
```
Output :

```
Convert Each First Letter Of Word In Uppercase Using Javascript.
```

I now I am making a very easy thing complex. 

You can easly done using CSS:

```
#Sstring {
    text-transform: capitalize;
}
```
or by applying CSS through Javascript.

```
var sr = document.getElementById("string");
sr.style.textTransform = "capitalize";
}
```
Output :

```
Convert Each First Letter Of Word In Uppercase Using JAVASCRIPT.
```
but by this method if you read carefully last word JAVASCRIPT is not converted.
thats why Javascript came handy in these situation.Moving to our next metnod


### Using Map Method

```
var str = document.getElementById("string").innerHTML;
var splitStr = str.toLowerCase().split(/\s+/);
var strArray = splitStr.map((subString) => {
  return subString.charAt(0).toUpperCase() + subString.slice(1);
});
var arrayToString = strArray.toString();
var finalResult = arrayToString.replace(/,/g, " ");
```

### Using RegExp Method

```
var str = document.getElementById("string").innerHTML;
var finalStr = str.replace(
  /(^\w|\s+\w)(\S*)/g,
  (_, p1, p2) => p1.toUpperCase() + p2.toLowerCase()
);
```

