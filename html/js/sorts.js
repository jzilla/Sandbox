var sort;
var dx = 4;
Array.prototype.swap = function(p1, p2) {
	var tmp = this[p1];
	this[p1] = this[p2];
	this[p2] = tmp;
}

extend = function(subClass, baseClass) {
	function inheritance() {}
	inheritance.prototype = baseClass.prototype;
	subClass.prototype = new inheritance();
	subClass.prototype.constructor = subClass;
	subClass.baseConstructor = baseClass;
	subClass.superClass = baseClass.prototype;
}

$(function() {
	var no = 300;
	var wrap = $('.sortWrap').eq(0);
	var h = wrap.height();
	var a = [];
	for ( var i = 0; i < no; i++) {
		wrap.append('<div class="sortable unsorted"></div>');
	}
	var items = $('.sortable', wrap);
	var scale = .0478;
	var ha = h / 2;
	items.each(function(ind, item) {
		item = $(item);
		a.push(item);
		item.height(Math.floor(Math.cos(ind * scale) * ha) + ha);
		// item.height(Math.floor( (Math.random() * h) +1));
		// item.height(1Math.floor( (Math.abs(Math.sin(Math.random()*Math.PI/2)
		// * h)) +1));
		item.css('left', dx * ind);
	});

	//sort = new GnomeSort(a);
	// sort = new BubbleSort(a);
	// sort = new CocktailSort(a);
	// sort = new CombSort(a);
	sort = new QuickSort(a);

	$('#step').click(function() {
		sort.step();
	});

	x();

});

var x = function() {
	if (!sort.finished) {
		sort.step();
		var t = parseInt($('#delay').val());
		setTimeout(x, t);
	}else {
		console.log("Sort completed");
	}
}

var Sort = function() {

}
Sort.prototype.swap = function(p1, p2) {
	this.a[p1].css('left', p2 * dx);
	this.a[p2].css('left', p1 * dx);
	var tmp = this.a[p1];
	this.a[p1] = this.a[p2];
	this.a[p2] = tmp;
}

var baseSort = new Sort();