var GnomeSort = function(array) { 
    console.log(this);
    this.a = array;
    this.pos = 0;
    this.changedFlag = 0;
    this.finished = false;
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
}

extend(GnomeSort, Sort);

GnomeSort.prototype.step = function() {
    if (!(this.pos < this.a.length)) {
		this.finished = true;
	} else {
		this.currentDiv.css('left', this.pos * dx);
		this.compareDiv.css('left', (this.pos +1) * dx);
		if(this.a[this.pos].height() <= this.a[this.pos+1].height()) {
			this.pos++;
		} else {
			this.swap(this.pos, this.pos+1)
			if (this.pos > 0)
				this.pos--;
			else
				this.pos++;
		}
	}
}