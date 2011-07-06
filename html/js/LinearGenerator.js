var LinearGenerator = function (min, max, size) {
	this.min = min;
	this.max = max;
	this.length = size;
}

LinearGenerator.prototype.getArray = function(reverse) {
	var i;
	var a  = [];
	var dx = this.max - this.min;
	for (i = 0; i < this.length; i++) {
		a.push(Math.floor( (dx/this.length) * i ));
	}
	if (reverse) return a.reverse();
	return a;
}



