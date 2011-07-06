var BubbleSort = function(array) { 
    console.log(this);
    this.a = array;
    this.pos = 0;
    this.end = array.length;
    this.changedFlag = 0;
    this.finished = false;
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
}
extend(BubbleSort, Sort);
BubbleSort.prototype.step = function() {
    var nextPos = this.pos + 1;
    this.currentDiv.css('left', this.pos *dx);
    this.compareDiv.css('left', nextPos *dx);
    if (nextPos < this.end) {
        if (this.a[this.pos].height() > this.a[nextPos].height()) {
            this.swap(this.pos, nextPos);
            this.changedFlag=1 ;
        }
        this.pos = nextPos;
    } else {
        if (this.changedFlag == 0) {
            this.finished = true;
            $('.unsorted').removeClass("unsorted").addClass("sorted");
        } else {
            this.a[this.pos].removeClass("unsorted").addClass("sorted");
            this.pos = 0;
            this.changedFlag = 0;
            this.end--;
            this.step();
        }
        //end of run;
    }
}