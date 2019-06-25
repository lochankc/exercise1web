let countries = [{
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
	"value": "US",
	"label": "US",
	"emailOptin": "Always",
	"mailOptin": "Always",
	"smsOptin": "Optional"
}, {
	"$schema": "http://flagship-api.lbidts.com/schemas/country/definitions.json#/definitions/country",
	"regions": {},
	"cities": [],
    "value": "CA",
	"emailOptin": "OptionalPreselected",
	"mailOptin": "OptionalPreselected",
	"smsOptin": "Optional"
}];

function printmyvalue (countryArray) {

    for(i=0; i<countryArray.length; i++){
    if(countryArray[i].value=="US" || countryArray[i].value=="CA")
    {
        document.write("emailOptin: "+countryArray[i].emailOptin);
        document.write("<br>");
        document.write("mailOptin: "+countryArray[i].mailOptin);
        document.write("<br>");
        document.write("smsOptin: "+countryArray[i].smsOptin);
        document.write("<br>");
    }
}
}
printmyvalue(countries);

