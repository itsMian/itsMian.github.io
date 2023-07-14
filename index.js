function habitDetails(b){
	var x1 = document.getElementById("description1");
	var x2 = document.getElementById("description2");
	var x3 = document.getElementById("description3");	
		
	if (b.id == 1) {
		if(x1.style.visibility === "hidden")	
			x1.style.visibility = "visible";
		else
			x1.style.visibility = "hidden";
	}
	if (b.id == 2) {
		if(x2.style.visibility === "hidden")	
			x2.style.visibility = "visible";
		else
			x2.style.visibility = "hidden";
	}
	if (b.id == 3) {
		if(x3.style.visibility === "hidden")	
			x3.style.visibility = "visible";
		else
			x3.style.visibility = "hidden";
	}
}
