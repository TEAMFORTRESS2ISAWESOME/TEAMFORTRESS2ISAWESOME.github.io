v1correct=0;

while (v1correct = 0) {

	var v1 = prompt("I am your personal Robot Servant. Please enter your name here, sir.").toUpperCase();

	switch (v1) {
	
	case ("KEITH"):

		var keith1 = prompt("Good day Master Keith. Would you like to go to your mansion, or your secret headquarters sir?").toUpperCase();
			switch(keith1) {
				case ("MANSION"):
					//code
				break;

				case ("SECRET HEADQUARTERS"):
				case ("HEADQUARTERS"):
					//code
				break;

				default:
					//code
					alert("What?");
				break;
			}

    break;
  
  	default:
  		alert("Who are you again?");
   	break;

	}

}
