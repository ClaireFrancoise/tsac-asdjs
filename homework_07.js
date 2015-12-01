//esercizio 1.a Ricorsione

function esercizio1(myarray){
	if(myarray == 0){
		return 10;
	} else{
		return (5 * myarray[0]) + esercizio1(myarray.slice(1));
	}
}

//esercizio 1.b Ricorsione

function sommaQuadrati(myarray){
	if (myarray == 0){
		return 0;
	} else if(myarray[0]%2 == 0){
		return (myarray[0]*myarray[0]) + sommaQuadrati(myarray.slice(1));
	} else {
		return sommaQuadrati(myarray.slice(1));
	}
}
// esercizio 2 sommaQuadrati funzionale

function sommaQuadratiF(myarray){
	if (myarray == 0){
		return 0;
	}else{
		return myarray.reduce(function(tot, x){
			if(x%2 == 0){
				return x*x + tot;
			 }else {
				return tot;
			}
		},0);
	}
}

//esercizio 3 stack

function Stack() {
       this.array = [];
}
Stack.prototype.push = function (insert) {
       this.array.push(insert);
}
Stack.prototype.pop = function () {
       return this.array.pop();
}
Stack.prototype.peek = function () {
       return this.array[this.array.length - 1];
}
Stack.prototype.isEmpty = function () {
       return this.array.length == 0;
}
function inserimento(a){
	var pari = new Stack();
	var dispari = new Stack();
	for (i = 0; i < a.length - 1; i++){
		if(a[i]%2 != 0){
		   	dispari.push(a[i]);
		}else if(a[i]%2 == 0){
		    	pari.push(a[i]);
		}else{
			return 0;
		}
	}	
}


//esercizio 4 implementa metodi odd e get delle liste



