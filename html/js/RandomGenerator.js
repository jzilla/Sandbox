var RandomGenerator = function (min, max, size) {
	this.min = min;
	this.max = max;
	this.length = size;
}

RandomGenerator.prototype.getArray = function(reverse) {
	var i;
	var a  = [];
	var dx = this.max - this.min;
	for (i = 0; i < this.length; i++) {
		a.push(   Math.floor(Math.random()* dx) +1 + this.min);
	}
	if (reverse) return a.reverse();
	return a;
}



