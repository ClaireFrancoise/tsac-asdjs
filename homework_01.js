function ex_6_I(x, y){
    ris = 0;
    resto = 0;
    while(resto + y <= x){
        resto+=y;
        ris++;
    }
    console.log('risultato ' + ris);
    console.log('resto ' + (x - resto));
}
function ex_6_R(x, y, i, j){
    if (x == 0){
        console.log('risultato ' + i);
        console.log(' resto ' + j);
    }else if (j + y <= x){
        j = j + y;
        i++;
        console.log('risultato ' + i);
        console.log('resto ' + (x - j));
    }
}

function Fex_6_R(x, y){
    i = 0;
    j = 0;
    return ex_6_R(x, y, i, j);
}

// spazio O(1); tempo O(n)
function ex_9_I(x){
    y = [];
    j = 0;
    for (i = x.length-1; i >= 0; i--){
        y[j] = x[i];
        j = j +1;
    }
    return y;
}

function ex_9_R(x, y){
    if(x.length == 0){
        return y;
    }else{
        y[y.length] = x[x.length-1];
        return ex_9_R(x.slice(0, x.length-1), y);
    }
}
function Fex_9_R(x){
    y = [];
    return ex_9_R(x, y);
}


//spazio O(1); tempo O(n)
function ex_10_I(x, y){
    a = [];
    for(i = 0; i < y; i++){
        a[i] = x;
    }
    return a;
} 

function ex_10_R(x, y, b){
    if (y == 0){
        return b;
    }else{
        b[b.length] = x;
        return ex_10_R(x, y - 1, b);
    }
}
function Fex_10_R(x, y){
    b = [];
    return ex_10_R(x, y, b);
}

function ex_11_I(x){
    c = x.length;
    for(i = 0; i < c; i++){
        if(x[i]%2 != 0){
           x[x.length] = x[i];
        }
    }
    for (i = 0; i < c; i++){
        if(x[i]%2 == 0){
            x[x.length] = x[i];
        }
    }
    return x.slice(c);
}


