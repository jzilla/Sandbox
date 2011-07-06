var HeapSort = function(array) {
    console.log(this);
    this.a = array;
    this.left = 0;
    this.heapsize = this.a.length;
    this.finished = false;
    this.callStack = [ this.buildHeap, this.getHeapSort() ];
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
    this.currentDiv.show();
    this.compareDiv.show();
}
extend(HeapSort, Sort)

HeapSort.prototype.getSiftDown = function (start, end) {
	var c;
	var t = this.a[start];
	
	return function () {
		if (!(  ((2*start) +1) < end)) {
			this.a.start[list] = t;
			return true;
		}
		c = (2 * start) +1;
		if ( (c != (end-1)) && this.a[c]
		
		
		
	}
	
}
HeapSort.prototype.buildHeap = function () {
	
}
HeapSort.prototype.getHeapSort = function() {
	var i = this.a.length-1;
	return function() {
		if (!(i > 0)) {
			this.fishished = true;
			return true;
		}
		this.swap(0, i);
		i--;
		callstack.unshift(getSiftDown(0, i));
		
	}
	

}

HeapSOrt.prototype.step = function() {
    if (this.callStack == 0 ) {
        this.finished = true;
        return;
    }
    var x = this.callStack[0].call(this);
    if (x) this.callStack.shift();
}