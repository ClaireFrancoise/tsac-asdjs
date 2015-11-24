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

function dec2bin(a){
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
