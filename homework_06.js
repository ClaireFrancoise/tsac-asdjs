function sort(myarray){
	if(myarray.length == 0 || myarray.length == 1){
		return myarray;
	} else {
		var a = Math.ceil(myarray / 2);
		var primo = myarray.slice(0, a);
		var secondo = myarray.slice(a, myarray.length);
		return sort(primo).concat(sort(secondo));	
	}
}

