var SelectionSort = function(array) { 
    console.log(this);
    this.a = array;
    this.begin =0;
    this.minPos =0;
    this.pos = 0;
    this.end = array.length;
    this.finished = false;
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
    this.state = 0;
}
extend(SelectionSort, Sort);
SelectionSort.prototype.step = function() {
	
	if (!(this.minPos < this.end )) {
		this.finished = true;
		return;
	}
	switch(this.state) {
	case 0:
		this.pos = this.begin;
		this.minPos = this.begin;
		this.currentDiv.css('left', this.begin * dx);
		this.state++;
		break;
	case 1:
		if (!(this.pos < this.end)) {
			if (this.minPos != this.begin)
				this.swap(this.begin, this.minPos)
			this.a[this.begin].removeClass("unsorted").addClass("sorted");
			this.begin++;
			this.state=0;
			break;
		}
		this.compareDiv.css('left', this.pos * dx);
		if (this.a[this.pos].height() < this.a[this.minPos].height()) {
			this.minPos = this.pos;
		}
		this.pos++;
		break;
	}
}