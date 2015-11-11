//esercizio 1

function sumAll(a){
    somma = 0;
    for(i = 0; i < a.length; i++){
        if(a[i] < 0){
           return somma;
       }
        somma = somma + a[i];
    }
    return somma;
}

function sumAllR(a){
        if(a.length == 0){
           return 0;
       }
        if (a[0] < 0){
            return 0;
        }else{
            return a[0] + sumAllR(a.slice(1));
        }
}

//esercizio 2

function sumAllD(x){
    somma = 0;
    for(i = 0; i < (x*2); i++){
        if((i%2) != 0){
            somma = somma + i;
        } 
    }
    return somma;
}

function summAllDR(x){
    if (x == 0){
        return 0;
    } else {
        return 2*x-1+summAllDR(x-1);
    }
}

//esercizio 3
function media(n){
    m = 0;
    m = sumAll(n) / n.length;
    return m;
}

function mediaR(n){
    return sumAllR(n) / n.length;
}

//esercizio 4

function intervallo(x,y){
    somma = 0;
    if(x > y){
        for (i = y; i <= x; i++){
            somma = somma + i;
        }
        return somma;
    }else {
        for (i = x; i <= y; i++){
            somma = somma + i;
        }
        return somma;
    }
}

function intervalloR(x,y){
    if (x > y) {
       return 0;
    }
    return x + intervalloR(x + 1, y)
}

function F_intervalloR(x, y){
    if (x > y){
        return intervalloR(y, x);
    } else {
        return intervalloR(x, y);
    }
}

//esrcizio 5

function molt(x, y){
    somma = 0;
    for (i = 0; i < y; i++){
        somma = somma + x;
    }
    return somma;
}

function moltR(x, y){
    if (x < 0 || y < 0){
        return 0;
    }
    if (y == 0){
         return 0;
    }else {
         return x + moltR(x, y-1);
    }
}


// esrcizio 6

function div(x, y){
    ris = 0;
    resto = 0;
    while(resto + y <= x){
        resto+=y;
        ris++;
    }
    resto = x - resto;
    return ris + 'resto' + resto;
}
function divR(x, y, i, j){
    if (x == 0){
        return i + 'resto' + j;
    }else if (j + y <= x){
        j = j + y;
        i++;
        return i + 'resto ' + (x-j);
    }
}

function F_divR(x, y){
    i = 0;
    j = 0;
    return divR(x, y, i, j);
}


//esercizio 7


function potenza(x, y){
    pot = x;
    while(y >1){
        pot = molt(pot, x);
        y--;
    }
    return pot;
}


function potenzaR(x, y, n){
    if (y == 1){
        return n;
    } else {
        return potenzaR(x, y-1, molt(x,n));
    }
}

//esercizio 9
// spazio O(1); tempo O(n)

function arreyInvert(x){
    y = [];
    j = 0;
    for (i = x.length-1; i >= 0; i--){
        y[j] = x[i];
        j = j +1;
    }
    return y;
}

function arrayInvertR(x, y){
    if(x.length == 0){
        return y;
    }else{
        y[y.length] = x[x.length-1];
        return arrayInvertR(x.slice(0, x.length-1), y);
    }
}
function F_arrayInvertR(x){
    y = [];
    return arrayInvertR(x, y);
}

//esercizio 10
//spazio O(1); tempo O(n)

function riempiArray(x, y){
    a = [];
    for(i = 0; i < y; i++){
        a[i] = x;
    }
    return a;
} 

function riempiArrayR(x, y, b){
    if (y == 0){
        return b;
    }else{
        b[b.length] = x;
        return riempiArrayR(x, y - 1, b);
    }
}
function F_riempiArrayR(x, y){
    b = [];
    return riempiArrayR(x, y, b);
}
 // esercizio 11
function separaP_D(x){
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


//per Tiziano

function ex_1_I(x){
    return sumAll;
}
function ex_1_R(x){
    return sumAllR(x);
}

function ex_2_I(x){
    return sumAllD(x);
}

function ex_2_R(x){
    return summAllDR(x);
}

function ex_3_I(x){
    return media(x);
}
function ex_3_R(x){
    return mediaR(x);
}

function ex_4_I(x, y){
    return intervallo(x, y);
}

function ex_4_R(x, y){
    return F_intervalloR(x, y);
}

function ex_5_I(x, y){
    return media(x, y);
}

function ex_5_R(x, y){
    return mediaR(x, y);
}

function ex_6_I(x, y){
    return div(x, y);
}

function ex_6_R(x, y){
    return F_divR(x, y);
}
function ex_7_I(x, y){
    return potenza(x, y);
}

function ex_7_R(x, y){
    return potenzaR(x, y);
}

function ex_9_I(x){
    return arreyInvert(x);
}

function ex_9_R(x){
    return F_arrayInvertR(x);
}

function ex_10_I(x, y){
    return riempiArray(x, y);
}

function ex_10_R(x, y){
    return F_riempiArrayR(x, y);
}

function ex_11_I(x){
    return separaP_D(x);
}