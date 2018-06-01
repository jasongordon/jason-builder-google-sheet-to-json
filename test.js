var gsjson = require('google-spreadsheet-to-json');
gsjson({
	spreadsheetId: '1X_P3wzJTSF0K36kx1oxa3BHEnz8TnvVKLQLXrR4BCXc',
	ignoreRow: 1,
	propertyMode: "nospace",
	beautify: 1
}).then(function(result) {
	result.forEach(function(part, index, theArray) {
  		var t = theArray[index] ;
		t['front'] = "{{ '" + t['front'] + "' | asset_url }}";
		t['top'] = "{{ '" + t['top'] + "' | asset_url }}";
		t['isomatric']  = "{{ '" + t['isometric'] + "' | asset_url }}";
		theArray[index] = t; 
	});
	result = JSON.stringify(result, null, 4 )  
    console.log("window.productData = " + result);
    
})
.catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
