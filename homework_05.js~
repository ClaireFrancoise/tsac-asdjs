//priorityCallBack
function CallBack() {
    this.myarray = [];
}

CallBack.prototype.enqueue = function(e, prio) {
	var oggetto = {
		numero : e,
		priority : prio
	}
	if(this.myarray.length == 0){
		this.myarray.push(oggetto);
	}else {
		var i = 0;
		while(!this.CallBack(this.myarray[i].priority, oggetto.priority)){
			i++;
		}
		this.myarray.splice(i, 0, oggetto);
	}
}
CallBack.prototype.dequeue = function() { return this.myarray.pop(); }
CallBack.prototype.front = function() { return this.myarray[this.myarray.length - 1]; }
CallBack.prototype.size = function() { return this.myarray.length; }
CallBack.prototype.isEmpty = function() { return this.size() == 0; }

//priority

function PriorityQueue() {
    	this.myarray = [];
}

PriorityQueue.prototype.enqueue = function(e, prio) {
	var oggetto = {
		numero : e,
		priority : prio
	}
	for(i = 0; i < this.myarray.length-1; i++){
		if(oggetto.priority > this.myarray[i]){
			this.myarray.splice(i, 0, oggetto);
		}
	}
	
}
PriorityQueue.prototype.dequeue = function() { return this.myarray.pop(); }
PriorityQueue.prototype.front = function() { return this.myarray[this.myarray.length - 1]; }
PriorityQueue.prototype.size = function() { return this.myarray.length; }
PriorityQueue.prototype.isEmpty = function() { return this.size() == 0; }

//circular
function CircularQueue(num) {
	this.n = num;
    	this.myarray = [];
	this.testa, this.coda;
	this.testa = this.coda = this.dimensione = 0;
}

CircularQueue.prototype.enqueue = function(e) {
	if(this.dimensione == n){
		return 0;
	} else{
		this.myarray[this.coda] = e; 
		this.coda = (this.coda ++) % this.n;
		this.dimensione++;
	}
}
		
CircularQueue.prototype.dequeue = function() {
	var a;
	if(this.dimensione == 0){
		return a;
	} else{
		a = this.myarray[this.testa];
		this.testa = (this.tasta++) % this.n;
		this.dimensione--;
		return a;	
	}
	
}


CircularQueue.prototype.front = function() { 
	if (this.testa == this.coda){
		return 0;
	} else{
		return this.myarray[this.testa]; 
	}
}
CircularQueue.prototype.size = function() {return this.dimensione;}
CircularQueue.prototype.isEmpty = function() {return this.dimensione == 0;}



