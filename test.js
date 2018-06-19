var gsjson = require('google-spreadsheet-to-json');
gsjson({
	spreadsheetId: '1iaanivIVtNDMVFQ31b6tl5C8ZaubqBBRgZLjr-ewE6Y',
	ignoreRow: 1,
	propertyMode: "nospace",
	beautify: 1
}).then(function(result) {
	result.forEach(function(part, index, theArray) {
  		var t = theArray[index] ;
		if(t['front'] !== undefined)
			t['front'] = "{{ '" + t['front'] + "' | asset_url }}";
		else
			t['front'] = '';
		if(t['top'] !== undefined)
			t['top'] = "{{ '" + t['top'] + "' | asset_url }}";
		else
			t['top'] = '';
		if(t['isometric'] !== undefined)
			t['isometric']  = "{{ '" + t['isometric'] + "' | asset_url }}";
		else
			t['isometric'] = '';
		if(t['frontKerning'] === undefined)
			t['frontKerning'] = '';
		if(t['topKerning'] === undefined)
			t['topKerning'] = '';
		if(t['isometricKerning'] === undefined)
			t['isometricKerning'] = '';
		if(t['name'] !== undefined) // delete unused name column
			delete t['name'];
		theArray[index] = t; 
	});
	result = JSON.stringify(result, null, 4 )  
    console.log("window.productData = " + result);
    
})
.catch(function(err) {
    console.log(err.message);
    console.log(err.stack);
});
