var sort;
var dx = 4;
Array.prototype.swap = function(p1, p2) {
    var tmp = this[p1];
    this[p1] = this[p2];
    this[p2] = tmp;
}
$(function() {
    var no = 450;
    var wrap = $('.sortWrap').eq(0);
    var h = wrap.height();
    var a = [];
    for (var i = 0; i < no; i++) {
        wrap.append('<div class="sortable unsorted"></div>');
    }
    var items = $('.sortable', wrap);
    var scale = .0478;
    var ha = h/2;
    items.each( function(ind, item)  {
        item = $(item);
        a.push(item);
        item.height(Math.floor(Math.cos(ind * scale) * ha ) + ha);
        //item.height(Math.floor( (Math.random() * h) +1));
        //item.height(Math.floor( (Math.abs(Math.sin(Math.random()*Math.PI/2) * h)) +1));
        item.css('left', dx * ind);
    });
    
    //sort = new BubbleSort(a);
    //sort = new CocktailSort(a);
    //sort = new CombSort(a);
    sort = new QuickSort(a);
    
    $('#step').click(function() { sort.step(); });
     
    x();
    
});

var x = function() {
    if (!sort.finished) {
        sort.step();
        var t = parseInt($('#delay').val());
        setTimeout(x, t);
    }
}


        

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


BubbleSort.prototype.log = function() {
    console.log("BubbleSort State: ----------------");
    console.log("position: " + this.pos);
    console.log("length  : " + this.end);
}

BubbleSort.prototype.step = function() {
    var nextPos = this.pos + 1;
    this.currentDiv.css('left', this.pos *dx);
    this.compareDiv.css('left', nextPos *dx);
    if (nextPos < this.end) {
        if (this.a[this.pos].height() > this.a[nextPos].height()) {
            this.a[this.pos].css('left', nextPos * dx);
            this.a[nextPos].css('left', this.pos*dx);
            this.a.swap(this.pos, nextPos);
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

CocktailSort.prototype.log = function() {
    console.log("CocktailSort State: ----------------");
    console.log("position: " + this.pos);
    console.log("length  : " + this.end);
}

CocktailSort.prototype.step = function() {

    if (this.forward) {
        var nextPos = this.pos + 1;
        this.currentDiv.css('left', this.pos *dx);
        this.compareDiv.css('left', nextPos *dx);
        if (nextPos < this.end) {
            if (this.a[this.pos].height() > this.a[nextPos].height()) {
                this.a[this.pos].css('left', nextPos * dx);
                this.a[nextPos].css('left', this.pos*dx);
                this.a.swap(this.pos, nextPos);
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
                this.a[this.pos].css('left', nextPos * dx);
                this.a[nextPos].css('left', this.pos*dx);
                this.a.swap(this.pos, nextPos);
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

CombSort.prototype.log = function() {
    console.log("CombSort State: ----------------");
    console.log("position: " + this.pos);
    console.log("length  : " + this.end);
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
