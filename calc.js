function insurance(){
	var selector = document.getElementById("country");                 //creating a var that stores the data from the select-tag country
	var countryId = parseInt( selector.options[selector.selectedIndex].value );			//creating a var that stores the data being outputted by the conversion from string into number
	var name = document.getElementById("ownerName").value;				//creating a var that stores the data from the input field for the name
	var age = parseInt(document.getElementById("carAge").value);      //creating a var that stores the data being outputted by the conversion from string into number
	var horsep = parseInt(document.getElementById("horsePower").value);  //creating a var that stores the data being outputted by the conversion from string into number
			
	var insurance = 0;
		switch( countryId ) {
			case 1: // Austria
				insurance = horsep * 100 / age + 50;
			break;

			case 2: // Hungary
				insurance = horsep * 150 / age + 20;
			break;

			case 3: // Greece
				insurance = horsep * 180 / age + 30;
			break;
		}
		
	document.getElementById("result").innerHTML= name + "'s yearly payments are " + insurance + " € ";
}