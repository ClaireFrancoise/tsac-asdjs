//ex_Numeroesercizio_F
//somma gli elementi di un array fino a che non trova un numero negativo
function ex_1_F(a){
    var myarray = [];
    a.every(function(x){if(x > 0) { myarray[ myarray.length] = x; return true;} else { return false;}})
    return myarray.reduce(function(acc, x){ return acc +x;}, 0)
}

//somma i primi n numeri dispari interi

function createArray(x){
    var n = [];
    for(i = 0; i < n; i++){
        n.push();
    }
    return n;
}
function ex_2_F(n){
    return createArray(2 * n).filter(function(x) { return x%2!=0}).reduce(function(acc, x){ return acc+x},0);
}

//media degli elementi di un array

function ex_3_F(x){
   return x.reduce(function(acc, x){return acc += x;}, 0) / x.length;
}

//somma i numeri all'interno dell'intervallo dato
function createArrayFromTo(a, b){
    var n = [];
    for (i = a; i<=b; i++){
        n.push(i);
    }
    return n;
}
function ex_4_F(a, b){
    if(a > b){
        var t = a;
        a = b;
        b = t;
    }
    return createArrayFromTo(a, b).reduce(function(acc, x){ return acc+x;}, 0);
}

function ex_5_F(a, b){
    return createArray(b).reduce(function(acc, x){return acc + a}, 0);
}


function ex_7_F(){

}
//inverte l'array

function ex_9_F(x){
    return x.reverse();
}


function Stack(){
    this.myarray = [];
}
Stack.prototype.push = function(e){
    this.myarray.push(e);
}
Stack.prototype.pop = function(){
    return this.myarray.pop();
}
Stack.prototype.peek = function(){
    return this.myarray[this.myarray.length-1];
}
Stack.prototype.isEmpty = function(){
    return this.myarray.length == 0;
}

function divStack(a){
    var numeri = new Stack();
    var risultato = a;
    var resto = 0;
    var stringa = '';
    while(risultato > 0){
        resto = risultato % 2;
        risultato = Math.floor(risultato/2);
        numeri.push(resto);
    }  
    while (!numeri.isEmpty()){
        stringa = stringa + numeri.pop().toString();
    }
    return stringa;
}
