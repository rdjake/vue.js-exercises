Vue.component('table-component',{
props: {rows: {type: Number, required: true},cols:{type: Number, required: true}},
data: function() { return { storage: this.randomStorage()}},
computed:{
  rowNum: function () { return this.rows + 1},
  colNum: function () { return this.cols + 1},
},
methods: {
	boundSum: function(i,j) {
  	if(i === this.rowNum) return this.storage.map(x => x[j-1]).reduce((v,s) => s+(+v));
    if(j === this.colNum) return this.storage[i-1].reduce((v,s) => s+(+v));
  },
	randomStorage: function() {
  	let arr = Array.from({length: this.rows});
  	return arr.map(x => Array.from({length: this.cols}).map(y => Math.floor(100 * Math.random())));
  },
  randomClick: function () {
  	this.storage = this.randomStorage();
  },
	isBoundInput: function(i,j){ return i === this.rowNum || j === this.colNum}
}
});
  
var app = new Vue({	el: '#app' });