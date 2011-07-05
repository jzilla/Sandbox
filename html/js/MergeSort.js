var MergeSort = function(array) {
	console.log(this);
	this.a = array;
	this.pos = 0;
	this.changedFlag = 0;
	this.finished = false;
	this.currentDiv = $('#position');
	this.compareDiv = $('#compareWith');
}

extend(MergeSort, Sort);

MergeSort.prototype.step = function() {
	
}

MergSort.prototype