//ex_Numeroesercizio_F
//somma gli elementi di un array fino a che non trova un numero negativo
function ex_1_F(a){
    var myarray = [];
    a.every(function(x){if(x > 0) { myarray[ myarray.length] = x; return true;} else { return false;}})
    return myarray.reduce(function(acc, x){ return acc +x;}, 0)
}


//inverte l'array

function ex_9_F(x){
    return x.reverse();
}