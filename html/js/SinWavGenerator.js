var SinWavGenerator = function (min, max, size) {
	this.min = min;
	this.max = max;
	this.length = size;
	this.scale = 233.024;
}

SinWavGenerator.prototype.getSortedArray = function() {
	return quickSort(this.getArray());
}

SinWavGenerator.prototype.getArray = function(reverse) {
	var i;
	var a  = [];
	var dx = this.max - this.min;
	var dx2 = dx/2;
	for (i = 0; i < this.length; i++) {
		a.push( 
				Math.floor( (Math.sin((this.scale*i*Math.PI))*dx2) + 1 + dx2)
				);
	}
	return a;
}

quickSort = function(arr) {
	 
	  // return if array is unsortable
	  if (arr.length <= 1){
	    return arr;
	  }
	 
	  var less = Array(), greater = Array();
	 
	  // select and remove a pivot value pivot from array
	  // a pivot value closer to median of the dataset may result in better performance
	  var pivotIndex = Math.floor(arr.length / 2);
	  var pivot = arr.splice(pivotIndex, 1)[0];
	 
	  // step through all array elements
	  for (var x = 0; x < arr.length; x++){
	 
	    // if (current value is less than pivot),
	    // OR if (current value is the same as pivot AND this index is less than the index of the pivot in the original array)
	    // then push onto end of less array
	    if (
	      (arr[x] < pivot)
	      ||
	      (arr[x] == pivot && x < pivotIndex)  // this maintains the original order of values equal to the pivot
	    ){
	      less.push(arr[x]);
	    }
	 
	    // if (current value is greater than pivot),
	    // OR if (current value is the same as pivot AND this index is greater than or equal to the index of the pivot in the original array)
	    // then push onto end of greater array
	    else {
	      greater.push(arr[x]);
	    }
	  }
	 
	  // concatenate less+pivot+greater arrays
	  return quickSort(less).concat([pivot], quickSort(greater));
	};

