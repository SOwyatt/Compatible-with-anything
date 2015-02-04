
_$.type.isObjectOrArray = function(ins) {
	if (typeof ins === "object") return true;
	return false;
};

_$.type.isFunction = function(ins) {
	if (typeof ins === "function") return true;
	return false;
};
//End check type functions


//Variable functions
_$.hasValue = function(va) {
	if (typeof va === "undefined") return false;
	return true;
};
//End variable functions


//Element functions
_$.element.isChecked = function(ele) {
	if(_$.isString(ele)) ele = document.getElementById(ele);
	return ele.checked;
};

_$.element.getText = function(ele) {
	if(_$.isString(ele)) ele = document.getElementById(ele);
	return ele.value;
};

_$.element.check = function(ele) {
	if(_$.isString(ele)) ele = document.getElementById(ele);
};
//End element functions

//Math functions
_$.math.randomInteger = function(min, max) {
	return Math.floor((Math.random()) * (max - min) + 1) + min;
};

_$.math.randomWithDecimals = function(min, max, dp) {
	var random = Math.random();
	if(random.toString.length < dp) return new _$.randomWithDecimals(min, max, dp);
	var num = Math.pow(10,dp);
	random = random * num;
	random = Math.floor(random * (max - min) + 1) + min;
	random = random / num;
	return random;
};	
//End Math functions
