var QuickSort = function(array) {
    console.log(this);
    this.a = array;
    this.left = 0;
    this.finished = false;
    this.callStack = [ this.getSort(0, array.length-1) ];
    this.currentDiv = $('#position');
    this.compareDiv = $('#compareWith');
    this.storeDiv = $('#store');
    this.currentDiv.show();
    this.storeDiv.show();
    this.compareDiv.show();
}
extend(QuickSort, Sort);
QuickSort.prototype.getSort = function(left, right) {
    var state = 0;
    var pos  = left;
    //var pivot = Math.floor((right+left)/ 2);
    var pivot = left + Math.floor(Math.random() * (right-left))
    var pivotValue = this.a[pivot].height();
    var store = left;
    return function() {
        switch(state) {
            case 0: //swaping pivot and rigth;
                this.scope(left,right + 1);
                this.a[pivot].removeClass('unsorted').addClass('pivot');
                this.a[right].css('left', pivot * dx);
                this.a[pivot].css('left', right * dx);
                this.a.swap(right, pivot);
                this.currentDiv.css('left', (right) * dx);
                state++;
                break;
            case 1:  // main loop
                if (!(pos < right)) {
                    state ++;   
                } else {
                    this.compareDiv.css('left', pos * dx);
                    this.storeDiv.css('left', store *dx);
                    if (this.a[pos].height() < pivotValue) {
                        this.swap(pos, store);
                        store++;
                    }
                    pos++;
                }
                break;
            case 2: // move pivot back;
                this.a[right].removeClass('pivot').addClass('sorted');
                this.a[right].css('left', store * dx);
                this.a[store].css('left', right * dx);
                this.a.swap(store, right);
                this.unscope(left,right +1);
                state++;
                break;
            case 3: // call quicksort on left
                if (left < (store -1)) {
                    this.callStack.unshift(this.getSort(left, (store-1)));
                } else {
                    this.setSorted(left, store);
                }
                state++;
                this.step();
                break;
            case 4: //call quicksort on right
                if ((store + 1) < right) {
                    this.callStack.unshift(this.getSort((store+1), right));
                } else {
                    this.setSorted((store +1), right+1);
                }
                state++;
                this.step();
                break;
            case 5: //return true, to remove fromstatck
                return true; 
        }
        return false;
    }
}

QuickSort.prototype.setSorted= function (left, right) {
    var i ;
    var o;
    for (i = left; i < right; i++) {
        o = this.a[i];
        o.removeClass('outsideScope');
        this.a[i].addClass('sorted');
    }
}



QuickSort.prototype.scope = function (left, right) {
    var i ;
    var o;
    for (i = left; i < right; i++) {
        o = this.a[i];
        if (o.hasClass('outsideScope'))
            o.removeClass('outsideScope').addClass('unsorted');
    }
}

QuickSort.prototype.unscope = function (left, right) {
    var i ;
    var o;
    for (i = left; i < right; i++) {
        o = this.a[i];
        if (o.hasClass('unsorted'))
            o.removeClass('unsorted').addClass('outsideScope');
    }
}

QuickSort.prototype.step = function() {
    if (this.callStack == 0 ) {
        this.finished = true;
        return;
    }
    var x = this.callStack[0].call(this);
    if (x) this.callStack.shift();
}



