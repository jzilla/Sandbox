var DistinctGenerator = function (min, max, size, distincts) {
	this.min = min;
	this.max = max;
	this.count = distincts;
	this.length = size;
}

DistinctGenerator.prototype.getSortedArray = function() {
	var i;
	var a  = [];
	var dx = this.max - this.min;
	var d = [];
	for (i = 0; i < this.count; i++) {
		d.push( Math.floor( (dx/(this.count -1)) * i ));
	}
	for (i = 0; i < this.length; i++) {
		a.push(d[Math.floor( (this.count/this.length) * i )]);
	}
	return a;
}

DistinctGenerator.prototype.getArray = function() {
	var i;
	var a  = [];
	var dx = this.max - this.min;
	var d = [];
	for (i = 0; i < this.count; i++) {
		d.push( Math.floor( (dx/(this.count -1)) * i ));
	}
	for (i = 0; i < this.length; i++) {
		a.push(d[Math.floor(Math.random() * this.count)]);
	}
	return a;
}



