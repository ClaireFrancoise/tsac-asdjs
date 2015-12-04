function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/*function sumAR(a)
{
    somma = 0;
    for (i = 0; i < a.length; i++)
    {
         somma += a[i];
    }
    return somma;
}*/

//esercizio 1

function sommaIndici(a){
	var i = 0;
	if(a == 0){
		return i;
	} else if(a[0] == 5070){
		i++;
		return i + sommaIndici(a.slice(1));
	} else {
		return i + sommaIndici(a.slice(1));
	}
}


//esercizio 2 somma della radice quadrata dei quadrati dei numeri positivi pari

function radiceQuadrata(myarray) {
	var positivi = myarray.filter(function(x){return x > 0;});
	var pari= positivi.filter(function(x) {return x % 2 == 0;});
	var quadrato= pari.map(function(x) {return x * x;});  
	var somma=quadrato.reduce(function(acc, x) {return acc + x;}, 0);
	return Math.sqrt(somma);
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


function calcolaStack(stringa) {
    	var myarray = stringa.split(' ');
    	var s = new Stack();
    	var v = new Stack();
    	var operazione1, operazione2;

    	for (var i = 0; i < myarray.length; i++) {
        	if (myarray[i] != ')' && myarray[i] != '(') {
            		if (myarray[i] == '+' || myarray[i] == '-' || myarray[i] == '*' || myarray[i] == '/'){
                		s.push(myarray[i]);
            		}else{
                		v.push(parseInt(myarray[i]));
			}
       		 }else if (myarray[i] == ')') {
            		operazione1 = v.pop();
            		operazione2 = v.pop();
            		switch (s.pop()) {
                		case '+':
                    			v.push(operazione1 + operazione2);
                    			break;
                		case '-':
                    			v.push(operazione2 - operazione1);
                    			break;
                		case '*':
                    			v.push(operazione1 * operazione2);
                    		break;
                			case '/':
                    			v.push(operazione2 / operazione1);
                    			break;
				default:
					v.push(parseInt(myarray[i]));
            		}
        	}
    	}
    return v.pop();
}   
//esercizio 4 tree

function Node(i, left, right) {
    this.item = i;
    this.l = left;
    this.r = right;
}

function BST() {
    this.root = null;

}

BST.prototype.addNode = function(currentNode, newNode) {
    if (newNode.item < currentNode.item) {
         if (currentNode.l == null)
           currentNode.l = newNode;
         else
           this.addNode(currentNode.l, newNode);
    } else {
         if (currentNode.r == null)
           currentNode.r = newNode;
         else
           this.addNode(currentNode.r, newNode);
    }
}

BST.prototype.add = function(item) {
    if (this.root == null) {
        this.root = new Node(item, null, null);
    } else {
        this.addNode(this.root, new Node(item, null, null));
    }
}

function albero(myarray){
	var alberello = new BST();
	myarray.map(function(a){
		alberello.add(a);
	});
	return ricerca(alberello.root, 0);	
}
function ricerca(albero, massimo){
	if (albero == null){
		return massimo;
	} else{
		massimo = albero.item;
		return ricerca(albero.r, massimo);
	}
}
