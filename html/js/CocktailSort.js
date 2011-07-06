var CocktailSort = function(array) { 
    console.log(this);
    this.a = array;
    this.pos = 0;
    this.start = -1;
    this.end = array.length;
    this.changedFlag = 0;
    this.finished = false;
    this.forward = true;
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
}
extend(CocktailSort, Sort);
CocktailSort.prototype.step = function() {
    if (this.forward) {
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
                this.changedFlag = 0;
                this.forward = false;
                this.end--;
                this.pos = this.end;
                this.step();
            }
        }
    } else { //go backwards
        var nextPos = this.pos -1;
        this.currentDiv.css('left', this.pos *dx);
        this.compareDiv.css('left', nextPos *dx);
        if (nextPos > this.start) {
            if (this.a[this.pos].height() < this.a[nextPos].height()) {
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
                this.changedFlag = 0;
                this.forward = true;
                this.start++;
                this.pos = this.start;
                this.step();
            }
        }
    }
}
