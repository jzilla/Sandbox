var CombSort = function(array) { 
    console.log(this);
    this.a = array;
    this.pos = 0;
    this.gap = Math.floor(this.a.length * 1.247330950103979);
    this.changedFlag = 0;
    this.finished = false;
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
}
CombSort.prototype.step = function() {
    var nextPos = this.pos + this.gap;
    if (nextPos < this.a.length) {
        this.currentDiv.css('left', this.pos *dx);
        this.compareDiv.css('left', nextPos *dx);
        if (this.a[this.pos].height() > this.a[nextPos].height()) {
           this.a[this.pos].css('left', nextPos * dx);
           this.a[nextPos].css('left', this.pos*dx);
           this.a.swap(this.pos, nextPos);
           this.changedFlag=1 ;
        }
        this.pos++;
    } else {
        if (this.gap == 1 && this.changedFlag ==0)  {
           this.fishished = true;
           $('.unsorted').removeClass("unsorted").addClass("sorted");
           return;
        } else {
            this.gap = Math.floor(this.gap / 1.247330950103979);
            this.gap = Math.max(1, this.gap);
            this.changedFlag = 0;
            this.pos =0;
            this.step();
        }
    }
}
