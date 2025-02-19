
function provjeri() {

	var pitanje1 = document.kviz.pitanje1.value;
	var pitanje2 = document.kviz.pitanje2.value;
	var pitanje3 = document.kviz.pitanje3.value;

	var pitanje4 = document.kviz.pitanje1.value;
	var pitanje5 = document.kviz.pitanje5.value;
	var pitanje5 = document.kviz.pitanje5.value;


	var rezultat = 0;

	if ( pitanje1 == "hr" ) {
		rezultat++;
	}

	if ( pitanje2 == "true" ) {
		rezultat++;
	}

	if ( pitanje3 == "b" ) {
		rezultat++;
	}
	if ( pitanje4 == "hr" ) {
		rezultat++;
	}

	if ( pitanje5 == "true" ) {
		rezultat++;
	}

	if ( pitanje6 == "b" ) {
		rezultat++;
	}
	if ( pitanje7 == "hr" ) {
		rezultat++;
	}

	if ( pitanje8 == "true" ) {
		rezultat++;
	}

	if ( pitanje9 == "b" ) {
		rezultat++;
	}



	var messages = ["Tony stark who?!", "Mid", "Moja sestra sa 8 godina bi bolje znala"];
	var pictures = ["slika3.jpg", "slika2.jpg", "slika1.jpg"];

	var range;

	if ( rezultat < 4 ) {
		range = 2;
	}

	if ( rezultat > 5 && rezultat < 8 ) {
		range = 1;
	}

	if ( rezultat >=8 ) {
		range = 0;
	}


	document.getElementById("after").style.visibility = "visible";

	document.getElementById("poruka").innerHTML = messages[range];

	document.getElementById("broj_tocnih").innerHTML = "Imaš " + rezultat + " točnih odgovora";

	document.getElementById("slika").src = pictures[range];
	
}