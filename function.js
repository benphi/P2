//Not sure if I am doing something wrong, but for the substring functions I have to type allSubstrings ('example') into the command line
//Just allSubstring (example) doesnt seem to work. 

var isArmstrong = function(n) {
	"use stict";
	var sum = 0;
//convert to string
var n = String(n);
//traverse array
for (var i = 0; i<n.length; ++i) {
	var sum = sum + Math.pow(n[i], n.length);	
	if (n == sum) {
		var result = true;
	}
	else {result = false;}
	}
		return result;
};

var allArmstrongs = function(){
	"use strict";
    var digit = 0; var sum = 0;
    for (var i = 1; i < 99999; ++i) {
    	var n = i.toString();
    	var max = n.length;
    	sum = 0;    	
    		for(var k = 0; k < max; ++k){
    		digit = parseInt(n.charAt(k));
        	sum = sum + Math.pow(digit, max);
       	}
		    
    
    if (sum == n) {
		var result = result + ' ' + sum;
        
    }   }
    return result;
    //console.log(result); 
};


var allSubstrings1 = function(s) {
	var s = s.toString();
	var a = 0;
	var b = 1;
	var subWord = '';
	for ( a = 0, max = s.length; a < max;) {
	subWord = subWord +  ', ' + s.substring(a, b);
	var splitWord = subWord + ', ';  
	b = ++b;
	if (b==max){ for (a = 0, max = s.length; a < max;) {
			subWord = subWord +  ', ' + s.substring(a, b);
			var splitWord = subWord + ', ';  
			a = ++a
		}	} 
	}
	return splitWord;
	
};

var allSubstrings2 = function(s) {
	"use strict";
	var s = s.toString();
	var a = 0;
	var b = 1;
	var max = 0;
	var subWord = '';
	var wordArray = [];
	for ( a = 0, max = s.length; a < max;) {
	subWord = subWord +  ', ' + s.substring(a, b);
	var splitWord = subWord + ', ';  
	b = ++b;
	if (b==max){ for (a = 0, max = s.length; a < max;) {
			subWord = subWord +  ', ' + s.substring(a, b);
			var splitWord = subWord + ', ';  
			a = ++a
		}	} 
	}
	wordArray.push(splitWord) 
	return wordArray;
	
};

var maxWord = function(s) {
	"use strict";
	var s = s.toString();
	var str = s.split(" ");
    var word = 0;
    var word = '';
    for (var i = 0; i < str.length; i++) {
        if (word < str[i].length) {
            word = str[i].length;
            var longWord = str[i];
        }
    }
    return longWord;
};
